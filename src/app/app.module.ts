import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Angular2FontawesomeModule} from 'angular2-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule, MdCardModule, MdIconModule, MdInputModule,
  MdListModule, MdToolbarModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';


import { AppComponent } from './app.component';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }

];



@NgModule({
  declarations: [
    AppComponent,
    TopToolbarComponent,
    HomeComponent,
    LoginComponent
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
    MdListModule,
    MdToolbarModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
