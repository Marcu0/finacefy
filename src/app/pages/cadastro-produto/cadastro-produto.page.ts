import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  standalone: false,
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
  animations: [
    trigger('slideAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(-100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class CadastroProdutoPage {
  produto = {
    tipo: '',
    sabor: '',
    preco: 0,
    quantidade: null as number | null, // Permite null ou number
  };
  precoFormatado: string = '';
  produtoCadastrado = false;
  isLoading = false;
  currentStep = 1; // Passo atual do wizard
  formSubmitted = false; // Para controle de validação

  constructor(private toastCtrl: ToastController, private firestore: Firestore) {}

  // Navega para o próximo passo
  nextStep() {
    this.formSubmitted = true;

    // Validações específicas para cada passo
    if (this.currentStep === 1 && (!this.produto.tipo || !this.produto.sabor)) {
      this.showToast('Preencha todos os campos obrigatórios.');
      return;
    }

    if (this.currentStep === 2 && (!this.precoFormatado || !this.produto.quantidade || this.produto.quantidade <= 0)) {
      this.showToast('Preencha todos os campos obrigatórios com valores válidos.');
      return;
    }

    if (this.currentStep < 3) {
      this.currentStep++;
      this.formSubmitted = false; // Reseta o estado de validação
    }
  }

  // Navega para o passo anterior
  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  // Navega para um passo específico
  goToStep(step: number) {
    if (step >= 1 && step <= 3) {
      this.currentStep = step;
    }
  }

  // Formata o preço
  atualizarPreco(event: any) {
    const valorFormatado = event.target.value;
    this.precoFormatado = valorFormatado;
    this.produto.preco = this.converterParaNumero(valorFormatado);
  }
  filtrarNumeros(event: any) {
    const input = event.target as HTMLInputElement;
    let valor = input.value;
  
    // Remove todos os caracteres não numéricos, exceto vírgula e ponto
    valor = valor.replace(/[^0-9.,]/g, '');
  
    // Atualiza o valor no campo
    input.value = valor;
    this.precoFormatado = valor;
  
    // Atualiza o valor numérico no objeto `produto`
    this.produto.preco = this.converterParaNumero(valor);
  }
  // Converte o valor formatado para número
  converterParaNumero(valorFormatado: string): number {
    const valorNumerico = valorFormatado
      .replace('R$ ', '')
      .replace(/\./g, '')
      .replace(',', '.');
    return parseFloat(valorNumerico);
  }

  // Valida a quantidade
  validarQuantidade(event: any) {
    const valor = event.target.value;
    if (valor === null || valor === '' || isNaN(valor)) {
      this.produto.quantidade = null; // Mantém o campo vazio
    } else if (valor < 0) {
      this.produto.quantidade = 0; // Garante que não seja negativo
    } else {
      this.produto.quantidade = Math.floor(valor); // Garante que é um número inteiro
    }
  }

  // Envia o formulário
  async onSubmit() {
    this.isLoading = true;

    try {
      // Validações finais antes de enviar
      if (this.produto.tipo.trim() === '' || this.produto.sabor.trim() === '') {
        this.showToast('Preencha todos os campos obrigatórios.');
        return;
      }

      if (this.produto.preco <= 0) {
        this.showToast('O preço deve ser maior que zero.');
        return;
      }

      if (this.produto.quantidade === null || this.produto.quantidade <= 0) {
        this.showToast('A quantidade deve ser maior que zero.');
        return;
      }

      // Adicionar no Firestore
      await addDoc(collection(this.firestore, 'produtos'), {
        tipo: this.produto.tipo,
        sabor: this.produto.sabor,
        preco: this.produto.preco,
        quantidade: this.produto.quantidade,
      });

      // Feedback visual
      this.produtoCadastrado = true;
      setTimeout(() => {
        this.produtoCadastrado = false;
      }, 3000);

      // Limpar formulário
      this.produto = { tipo: '', sabor: '', preco: 0, quantidade: null }; // Reinicialize como null
      this.precoFormatado = '';
      this.currentStep = 1; // Volta para o primeiro passo
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
      this.showToast('Erro ao cadastrar produto. Tente novamente.');
    } finally {
      this.isLoading = false;
    }
  }

  // Exibe um toast
  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }
}