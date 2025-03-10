import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaidaProdutoPageRoutingModule } from './saida-produto-routing.module';

import { SaidaProdutoPage } from './saida-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaidaProdutoPageRoutingModule
  ],
  declarations: [SaidaProdutoPage]
})
export class SaidaProdutoPageModule {}
