import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParamComponent } from './param.component';

const routes: Routes = [
  {
    path: ':id',
    component: ParamComponent,
    children: [
      {
        path: 'child',
        component: ChildComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParamRoutingModule { }
