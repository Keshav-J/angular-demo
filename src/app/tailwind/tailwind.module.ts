import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TailwindRoutingModule } from './tailwind-routing.module';
import { TwFirstComponent } from './tw-first/tw-first.component';
import { TwSecondComponent } from './tw-second/tw-second.component';
import { TailwindComponent } from './tailwind.component';


@NgModule({
  declarations: [
    TailwindComponent,
    TwFirstComponent,
    TwSecondComponent
  ],
  imports: [
    CommonModule,
    TailwindRoutingModule
  ]
})
export class TailwindModule { }
