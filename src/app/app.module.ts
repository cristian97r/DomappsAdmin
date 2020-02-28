import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { GoogleMapsComponent } from "./google-maps/google-maps.component";
import { SidebarTmxComponent } from "./sidebar-tmx/sidebar-tmx.component";
import { EstadoComponent } from "./containers/estado/estado.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { ModalModule } from "./_modal";
import { EstadoDetailsComponent } from "./containers/estado-details/estado-details.component";
import { EmpleadoComponent } from "./empleado/empleado.component";
import { EmpleadoDetailsComponent } from "./empleado-details/empleado-details.component";
import { PanicButtonComponent } from "./containers/panic-button/panic-button.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SidenavAlertComponent } from "./sidenav-alert/sidenav-alert.component";
import { MatRadioModule } from "@angular/material/radio";
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { WheaterComponent } from './wheater/wheater.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { WeatherChartComponent } from './weather-chart/weather-chart.component';
import { WeatherHourComponent } from './weather-hour/weather-hour.component';
import { SocialComponent } from './social/social.component';



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
    PanicButtonComponent,
    SidenavAlertComponent,
    WheaterComponent,
    WeatherDetailsComponent,
    WeatherChartComponent,
    WeatherHourComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxChartsModule,
    ModalModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatButtonModule,
    MatSidenavModule,
    MatRadioModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
