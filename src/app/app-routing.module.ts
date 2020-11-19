import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChildComponent } from './param/child/child.component';
import { ParamComponent } from './param/param.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule)
  },
  {
    path: 'param',
    loadChildren: () => import('./param/param.module')
                        .then(m => m.ParamModule),
  },
  {
    path: 'dynamicLoading',
    loadChildren: () => import('./dynamic-loading/dynamic-loading.module')
                        .then(m => m.DynamicLoadingModule)
  }/* ,
  {
    path: '**',
    redirectTo: '/'
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
