import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildStylingRoutingModule } from './child-styling-routing.module';
import { ChildStylingComponent } from './child-styling.component';
import { ChildComponent } from './child/child.component';
import { ChildTwoComponent } from './child-two/child-two.component';


@NgModule({
  declarations: [ChildStylingComponent, ChildComponent, ChildTwoComponent],
  imports: [
    CommonModule,
    ChildStylingRoutingModule
  ]
})
export class ChildStylingModule { }
