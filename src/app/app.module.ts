// import { CategoryComponent } from './category/category.component';
// import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent
    
    // componentes não usados
    // CategoryComponent,
    // TestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // Imports do projeto em si
    FormsModule, //Modulo necessário para funcionar o ngModel
    MaterialModule, //Modulo de importação do Angular Material

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
