import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TailwindComponent } from './tailwind.component';

const routes: Routes = [
  {
    path: '**',
    component: TailwindComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TailwindRoutingModule { }
