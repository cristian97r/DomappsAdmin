import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EstadoDetailsComponent } from './containers/estado-details/estado-details.component';
import { EstadoComponent } from './containers/estado/estado.component';
import { EmpleadoDetailsComponent } from './empleado-details/empleado-details.component';
import { PanicButtonComponent } from './containers/panic-button/panic-button.component';
import { SidenavAlertComponent } from './sidenav-alert/sidenav-alert.component';
import { WheaterComponent } from './wheater/wheater.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { SocialComponent } from './social/social.component';


const routes: Routes = [ { path: 'home', component: EstadoComponent },
{ path: 'estado', component: EstadoDetailsComponent },
{ path: 'empleado', component: EmpleadoDetailsComponent },
{ path: 'panicbutton', component: PanicButtonComponent },
{ path: 'vehicletraking', component: SidenavAlertComponent },
{ path: 'weatherdetails', component: WeatherDetailsComponent },
{ path: 'weather', component: WheaterComponent },
{ path: 'social', component: SocialComponent },
{ path: '', redirectTo: 'home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
