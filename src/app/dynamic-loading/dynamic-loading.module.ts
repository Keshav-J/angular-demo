import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicLoadingRoutingModule } from './dynamic-loading-routing.module';
import { DynamicLoadingComponent } from './dynamic-loading.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DynamicLoadingComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    CommonModule,
    DynamicLoadingRoutingModule,
    FormsModule
  ],
  entryComponents: [
    FirstComponent,
    SecondComponent
  ]
})
export class DynamicLoadingModule { }
