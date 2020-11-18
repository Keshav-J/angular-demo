import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
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
    path: 'multi/:a/:b/end',
    component: ParamComponent
  },
  {
    path: 'dynamicLoading',
    loadChildren: () => import('./dynamic-loading/dynamic-loading.module')
                        .then(m => m.DynamicLoadingModule)
  } /* ,
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
