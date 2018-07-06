import { ConfirmarComponent } from './components/reservar/confirmar.component';
import { RegistrarComponent } from './components/reservar/registrar.component';
import { ReservarComponent } from './components/reservar/reservar.component';
import { HomeComponent } from './components/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'reservar', component: ReservarComponent},
  {path: 'registrar/:id', component: RegistrarComponent},
  {path: 'confirmar/:id', component: ConfirmarComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}

