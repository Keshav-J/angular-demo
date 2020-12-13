import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VariableScopeRoutingModule } from './variable-scope-routing.module';
import { VariableScopeComponent } from './variable-scope.component';
import { VariableChildComponent } from './variable-child/variable-child.component';


@NgModule({
  declarations: [VariableScopeComponent, VariableChildComponent],
  imports: [
    CommonModule,
    VariableScopeRoutingModule
  ]
})
export class VariableScopeModule { }
