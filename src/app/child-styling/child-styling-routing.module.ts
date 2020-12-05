import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildStylingComponent } from './child-styling.component';

const routes: Routes = [
  {
    path: '',
    component: ChildStylingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildStylingRoutingModule { }
