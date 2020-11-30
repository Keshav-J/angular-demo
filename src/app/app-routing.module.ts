import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

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
  },
  {
    path: 'custom-url-matcher',
    loadChildren: () => import('./custom-url-matcher/custom-url-matcher.module')
                        .then(m => m.CustomUrlMatcherModule)
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
