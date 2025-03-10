import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaidaProdutoPage } from './saida-produto.page';
import { SaboresPage } from '../sabores/sabores.page';

const routes: Routes = [
  {
    path: '',
    component: SaidaProdutoPage
  },
  {
    path: 'sabores:tipo', component: SaboresPage
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaidaProdutoPageRoutingModule {}
