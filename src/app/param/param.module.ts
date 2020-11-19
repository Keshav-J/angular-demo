import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParamRoutingModule } from './param-routing.module';
import { ChildComponent } from './child/child.component';
import { ParamComponent } from './param.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ParamComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    ParamRoutingModule,
    FormsModule
  ]
})
export class ParamModule { }
