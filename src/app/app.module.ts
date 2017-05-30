import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2FontawesomeModule} from 'angular2-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {
  MdButtonModule, MdCard, MdCardModule, MdIconModule, MdInputModule,
  MdListModule
} from '@angular/material';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule,
    BrowserAnimationsModule,
    MdInputModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
