import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // added forms module for two way binding

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule //added Forms Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
