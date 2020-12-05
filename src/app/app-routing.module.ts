import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'theme',
    loadChildren: () => import('./theme/theme.module')
                        .then(m => m.ThemeModule)
  },
  {
    path: 'child-styling',
    loadChildren: () => import('./child-styling/child-styling.module')
                        .then(m => m.ChildStylingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
