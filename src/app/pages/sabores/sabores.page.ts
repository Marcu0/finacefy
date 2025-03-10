import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getFirestore, collection, getDocs, updateDoc, doc, addDoc, deleteDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular';

interface Produto {
  id: string;
  tipo: string;
  sabor: string;
  quantidade: number; // Quantidade em estoque
  quantidadeSaida: number; // Quantidade a ser retirada (começa em 0)
}

@Component({
  standalone: false,
  selector: 'app-sabores',
  templateUrl: './sabores.page.html',
  styleUrls: ['./sabores.page.scss'],
})
export class SaboresPage implements OnInit {
  tipo: string = ''; // Tipo selecionado
  sabores: Produto[] = []; // Lista de sabores
  saboresFiltrados: Produto[] = []; // Lista filtrada de sabores
  termoFiltro: string = ''; // Termo de filtro
  isLoading: boolean = false; // Estado de carregamento
  private firestore = getFirestore(initializeApp(environment.firebaseConfig));

  constructor(
    private route: ActivatedRoute, // Injeta o ActivatedRoute
    private router: Router, // Injeta o Router para redirecionamento
    private toastCtrl: ToastController // Injeta o ToastController para feedback
  ) {}

  async ngOnInit() {
    // Obtém o parâmetro 'tipo' da rota
    this.tipo = this.route.snapshot.paramMap.get('tipo') || '';
    await this.carregarSabores();
  }

  // Carrega os sabores do tipo selecionado
  async carregarSabores() {
    const produtosRef = collection(this.firestore, 'produtos');
    const querySnapshot = await getDocs(produtosRef);

    this.sabores = [];
    querySnapshot.forEach((doc) => {
      const produto = doc.data() as Produto;
      if (produto.tipo === this.tipo) {
        this.sabores.push({ ...produto, id: doc.id, quantidadeSaida: 0 }); // Inicializa quantidadeSaida
      }
    });

    this.filtrarSabores(); // Aplica o filtro inicial
  }

  // Filtra os sabores com base no termo de filtro
  filtrarSabores() {
    this.saboresFiltrados = this.sabores.filter((produto) =>
      produto.sabor.toLowerCase().includes(this.termoFiltro.toLowerCase())
    );
  }

  // Gera sugestões de sabores com base no termo de filtro
  obterSugestoes(): Produto[] {
    if (!this.termoFiltro) return [];
    return this.sabores.filter((produto) =>
      produto.sabor.toLowerCase().includes(this.termoFiltro.toLowerCase())
    );
  }

  // Seleciona uma sugestão e atualiza o termo de filtro
  selecionarSugestao(sugestao: Produto) {
    this.termoFiltro = sugestao.sabor;
    this.filtrarSabores(); // Atualiza a lista filtrada
  }

  // Aumenta a quantidade de saída
  aumentarQuantidade(produto: Produto) {
    if (produto.quantidadeSaida < produto.quantidade) {
      produto.quantidadeSaida += 1;
      produto.quantidade -= 1; // Atualiza o estoque
      this.verificarEstoque(produto); // Verifica se o estoque zerou
    }
  }

  // Diminui a quantidade de saída
  diminuirQuantidade(produto: Produto) {
    if (produto.quantidadeSaida > 0) {
      produto.quantidadeSaida -= 1;
      produto.quantidade += 1; // Atualiza o estoque
    }
  }

  // Verifica se o estoque zerou e redireciona
  verificarEstoque(produto: Produto) {
    if (produto.quantidade === 0) {
      this.showToast('Estoque zerado! Redirecionando...');
      setTimeout(() => {
        this.router.navigate(['/saida-produto']); // Redireciona para a página de saída
      }, 2000); // Redireciona após 2 segundos
    }
  }

  // Exclui o produto
  async excluirProduto(produto: Produto) {
    try {
      await deleteDoc(doc(this.firestore, 'produtos', produto.id));
      this.sabores = this.sabores.filter((p) => p.id !== produto.id);
      this.filtrarSabores(); // Atualiza a lista filtrada
      this.showToast('Produto excluído com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
      this.showToast('Erro ao excluir produto. Tente novamente.');
    }
  }

  // Confirma a saída dos produtos
  async confirmarSaida() {
    this.isLoading = true;

    try {
      for (const produto of this.sabores) {
        if (produto.quantidadeSaida > 0) {
          // Atualiza o estoque no Firestore
          await updateDoc(doc(this.firestore, 'produtos', produto.id), {
            quantidade: produto.quantidade,
          });

          // Registra a saída no Firestore (opcional)
          const saidasRef = collection(this.firestore, 'saidas');
          await addDoc(saidasRef, {
            tipo: produto.tipo,
            sabor: produto.sabor,
            quantidade: produto.quantidadeSaida,
            data: new Date().toISOString(),
          });
        }
      }

      this.showToast('Saída registrada com sucesso!');
      this.router.navigate(['/saida-produto']); // Volta para a página de saída
    } catch (error) {
      console.error('Erro ao registrar saída:', error);
      this.showToast('Erro ao registrar saída. Tente novamente.');
    } finally {
      this.isLoading = false;
    }
  }

  // Exibe uma mensagem de toast
  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}