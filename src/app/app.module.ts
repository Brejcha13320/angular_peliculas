import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';
import { AppRoutingModule } from './app.routes';
import { HeaderComponent } from './components/header/header.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { BuscandoComponent } from './pages/buscando/buscando.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    BuscarComponent,
    PeliculaComponent,
    HeaderComponent,
    NoimagePipe,
    FooterComponent,
    InformacionComponent,
    BuscandoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
