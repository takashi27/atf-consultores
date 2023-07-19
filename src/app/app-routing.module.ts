import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElegirnosComponent } from './pages/elegirnos/elegirnos.component';
import { HomeComponent } from './pages/home/home.component';
import { SomosComponent } from './pages/somos/somos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { OutsourcingComponent } from './pages/outsourcing/outsourcing.component';
import { RevisoriaComponent } from './pages/revisoria/revisoria.component';
import { TributariosComponent } from './pages/tributarios/tributarios.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },  
  { path: 'por-que-elegirnos', component: ElegirnosComponent },  
  { path: 'quienes-somos', component: SomosComponent },  
  { path: 'contactenos', component: ContactoComponent },  
  { path: 'outsourcing', component: OutsourcingComponent },  
  { path: 'revisoria-fiscal', component: RevisoriaComponent },  
  { path: 'tributarios', component: TributariosComponent },  
  { path: '', pathMatch: 'full', redirectTo: 'Home' },
  { path: '**', pathMatch: 'full', redirectTo: 'Home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
