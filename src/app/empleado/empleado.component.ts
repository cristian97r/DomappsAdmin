import { Component, OnInit } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { single } from "./data";

@Component({
  selector: "app-empleado",
  templateUrl: "./empleado.component.html",
  styleUrls: ["./empleado.component.scss"]
})
export class EmpleadoComponent implements OnInit {
  single: any[];
  view: any[] = [690, 150];

  showLegend: boolean = false;
  showLabels: boolean = false;

  colorScheme = {
    domain: ["#5AA454", "#E44D25", "#CFC0BB", "#7aa3e5", "#a8385d", "#aae3f5"]
  };

  constructor() {
    Object.assign(this, { single });
  }

  ngOnInit(): void {}

  onSelect(event) {
    console.log(event);
  }

  GotoEmpleado(){

  }
}
