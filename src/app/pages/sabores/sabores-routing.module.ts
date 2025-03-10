import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaboresPage } from './sabores.page';

const routes: Routes = [
  {
    path: '',
    component: SaboresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaboresPageRoutingModule {}
