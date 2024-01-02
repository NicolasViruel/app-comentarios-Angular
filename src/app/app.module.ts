import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; // Importar para usar el ngIf y ngFor

import { HttpClientModule } from '@angular/common/http'; // Importar para usar el servicio de http
import { FormsModule } from '@angular/forms'; // Importar para usar el ngModel en el formulario
import { AppComponent } from './app.component';
import { BodyComponent } from './components/body/body.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
