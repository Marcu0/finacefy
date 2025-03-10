import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'cadastro-produto',
    loadChildren: () =>
      import('./pages/cadastro-produto/cadastro-produto.module').then(
        (m) => m.CadastroProdutoPageModule
      ),
  },
  {
    path: 'saida-produto',
    loadChildren: () =>
      import('./pages/saida-produto/saida-produto.module').then(
        (m) => m.SaidaProdutoPageModule
      ),
  },
  {
    path: 'relatorios',
    loadChildren: () =>
      import('./pages/relatorios/relatorios.module').then(
        (m) => m.RelatoriosPageModule
      ),
  },
  {
    path: 'estoque',
    loadChildren: () =>
      import('./pages/estoque/estoque.module').then((m) => m.EstoquePageModule),
  },
  {
    path: 'sabores/:tipo', // Adiciona o parâmetro :tipo
    loadChildren: () =>
      import('./pages/sabores/sabores.module').then((m) => m.SaboresPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}