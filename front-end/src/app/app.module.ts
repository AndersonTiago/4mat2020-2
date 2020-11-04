import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
<<<<<<< HEAD
import {​​ HttpClientModule }​​ from '@angular/common/http';
import { CursoListComponent } from './curso/curso-list/curso-list.component';
=======
>>>>>>> ea68612bdbccef9dd45e80ee761dc2462006ef7b

@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    MainMenuComponent,
<<<<<<< HEAD
    MainFooterComponent,
    CursoListComponent
=======
    MainFooterComponent
>>>>>>> ea68612bdbccef9dd45e80ee761dc2462006ef7b
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
