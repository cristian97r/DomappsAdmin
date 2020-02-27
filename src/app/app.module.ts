import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { SidebarTmxComponent } from './sidebar-tmx/sidebar-tmx.component';
import { EstadoComponent } from './containers/estado/estado.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {ModalModule} from "./_modal";
import { EstadoDetailsComponent } from './containers/estado-details/estado-details.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { EmpleadoDetailsComponent } from './empleado-details/empleado-details.component';
import { PanicButtonComponent } from './containers/panic-button/panic-button.component'

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GoogleMapsComponent,
    SidebarTmxComponent,
    EstadoComponent,
    EstadoDetailsComponent,
    EmpleadoComponent,
    EmpleadoDetailsComponent,
    PanicButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
