import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ParamComponent } from './param/param.component';
import { FormsModule } from '@angular/forms';
import { DynamicLoadingModule } from './dynamic-loading/dynamic-loading.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
