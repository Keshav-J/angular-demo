import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VariableScopeComponent } from './variable-scope.component';

const routes: Routes = [
  {
    path: '',
    component: VariableScopeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VariableScopeRoutingModule { }
