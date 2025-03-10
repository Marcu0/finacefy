import { Component, OnInit } from '@angular/core';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-saida-produto',
  templateUrl: './saida-produto.page.html',
  styleUrls: ['./saida-produto.page.scss'],
})
export class SaidaProdutoPage implements OnInit {
  tipos: string[] = []; // Armazena os tipos de produtos
  private firestore = getFirestore(initializeApp(environment.firebaseConfig));

  constructor(private router: Router) {}

  async ngOnInit() {
    await this.carregarTipos();
  }

  // Carrega os tipos de produtos do Firestore
  async carregarTipos() {
    const produtosRef = collection(this.firestore, 'produtos');
    const querySnapshot = await getDocs(produtosRef);

    const tiposUnicos = new Set<string>();
    querySnapshot.forEach((doc) => {
      const produto = doc.data();
      tiposUnicos.add(produto['tipo']);
    });

    this.tipos = Array.from(tiposUnicos);
  }

  // Redireciona para a página de sabores
  redirecionarParaSabores(tipo: string) {
    this.router.navigate(['/sabores', tipo]); // Passa o tipo como parâmetro
  }

  // Redireciona para a página de cadastro de produtos
  irParaCadastro() {
    this.router.navigate(['/cadastro-produto']);
  }
}