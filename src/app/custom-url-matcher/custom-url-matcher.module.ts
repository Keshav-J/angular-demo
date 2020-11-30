import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomUrlMatcherRoutingModule } from './custom-url-matcher-routing.module';
import { UrlMatcherChildComponent } from './url-matcher-child/url-matcher-child.component';
import { CustomUrlMatcherComponent } from './custom-url-matcher.component';


@NgModule({
  declarations: [
    CustomUrlMatcherComponent,
    UrlMatcherChildComponent
  ],
  imports: [
    CommonModule,
    CustomUrlMatcherRoutingModule
  ]
})
export class CustomUrlMatcherModule { }
