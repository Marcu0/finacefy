import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { environment } from 'src/environments/environment';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  standalone: false,
  selector: 'app-relatorios',
  templateUrl: './relatorios.page.html',
  styleUrls: ['./relatorios.page.scss'],
})
export class RelatoriosPage {

  relatorio: any[] = [];
  totalGanho: number = 0;
  filtroMes: string = '';
  semanasDisponiveis: string[] = [];
  meses: string[] = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  isLoading: boolean = false;

  // ... (restante do código)
  constructor(private menuCtrl: MenuController) {
    initializeApp(environment.firebaseConfig);
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }

  async ngOnInit() {
    await this.carregarRelatorio();
  }

  async carregarRelatorio() {
    try {
      const db = getFirestore();
      const saidasRef = collection(db, 'saidas');
      const querySnapshot = await getDocs(saidasRef);

      const dados: any = {};

      querySnapshot.forEach((doc) => {
        const saida = doc.data();
        const { tipo, sabor, preco, quantidade, data } = saida;

        const dataSaida = new Date(data);
        const mesSaida = dataSaida.toLocaleString('default', { month: 'long' });

        if (this.filtroMes && mesSaida !== this.filtroMes) {
          return; // Ignora saídas que não correspondem ao filtro
        }

        const chave = `${tipo} - ${sabor}`;

        if (!dados[chave]) {
          dados[chave] = { tipo, sabor, quantidade: 0, totalPreco: 0, preco: 0 };
        }

        dados[chave].quantidade += quantidade;
        dados[chave].totalPreco += preco * quantidade;
        dados[chave].preco = preco;
      });

      this.relatorio = Object.values(dados);
      this.totalGanho = this.relatorio.reduce((acc, item) => acc + item.totalPreco, 0);
    } catch (error) {
      console.error('Erro ao carregar relatório:', error);
    }
  }
  // Método para gerar o PDF
  async gerarPDF() {
    const doc = new jsPDF('p', 'mm', 'a4');
  
    // Verifica o tema atual (claro ou escuro)
    const isDarkTheme = document.body.classList.contains('ion-theme-dark');
  
    // Define as cores com base no tema
    const textColor = isDarkTheme ? '#FFFFFF' : '#000000'; // Branco ou preto
    const primaryColor = '#007BFF'; // Azul (para títulos)
    const secondaryColor = '#28A745'; // Verde (para valores)
  
    // Configurações iniciais
    const margin = 10; // Margem da página
    let yPos = margin; // Posição Y inicial
  
    // Adiciona um título ao PDF
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(primaryColor);
    doc.text('Relatório de Saídas', margin, yPos);
    yPos += 10; // Espaçamento após o título
  
    // Adiciona a data de geração
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(textColor);
    doc.text(`Gerado em: ${new Date().toLocaleDateString()}`, margin, yPos);
    yPos += 10; // Espaçamento após a data
  
    // Adiciona os itens da lista
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(primaryColor);
    doc.text('Itens:', margin, yPos);
    yPos += 10; // Espaçamento após o subtítulo
  
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(textColor);
  
    this.relatorio.forEach((item, index) => {
      // Adiciona o tipo e sabor do item
      doc.text(`${index + 1}. ${item.tipo} de ${item.sabor}`, margin, yPos);
      yPos += 8; // Espaçamento após o tipo e sabor
  
      // Adiciona a quantidade
      doc.text(`   Quantidade: ${item.quantidade}`, margin + 5, yPos);
      yPos += 8; // Espaçamento após a quantidade
  
      // Adiciona o preço unitário
      doc.text(`   Preço Unitário: ${item.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`, margin + 5, yPos);
      yPos += 8; // Espaçamento após o preço unitário
  
      // Adiciona o total do item
      doc.text(`   Total: ${item.totalPreco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`, margin + 5, yPos);
      yPos += 12; // Espaçamento após o total do item
  
      // Verifica se precisa de uma nova página
      if (yPos > 280) {
        doc.addPage(); // Adiciona uma nova página
        yPos = margin; // Reinicia a posição Y
      }
    });
  
    // Adiciona o total de ganhos ao PDF
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(secondaryColor);
    doc.text(`Total de Ganhos: ${this.totalGanho.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`, margin, yPos);
  
    // Salva o PDF
    doc.save('relatorio-saidas.pdf');
  }
  
  // Método para aplicar filtros
  aplicarFiltros() {
    this.carregarRelatorio();
  }
}