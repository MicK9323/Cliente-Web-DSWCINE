import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Rutas
import { RoutingModule } from './app.routes';

// Componentes
import { ReservarComponent } from './components/reservar/reservar.component';
import { RegistrarComponent } from './components/reservar/registrar.component';
import { ConfirmarComponent } from './components/reservar/confirmar.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

// Servicios
import { ReservaService } from './services/reserva.service';
import { TicketPipe } from './pipes/ticket.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ReservarComponent,
    RegistrarComponent,
    ConfirmarComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    TicketPipe
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule
  ],
  providers: [ReservaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
