import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ElegirnosComponent } from './pages/elegirnos/elegirnos.component';
import { SomosComponent } from './pages/somos/somos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { TributariosComponent } from './pages/tributarios/tributarios.component';
import { RevisoriaComponent } from './pages/revisoria/revisoria.component';
import { OutsourcingComponent } from './pages/outsourcing/outsourcing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ElegirnosComponent,
    SomosComponent,
    ContactoComponent,
    TributariosComponent,
    RevisoriaComponent,
    OutsourcingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule   
  ],
  exports:[
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
