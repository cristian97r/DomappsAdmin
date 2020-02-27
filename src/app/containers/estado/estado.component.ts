import { Component, OnInit } from "@angular/core";
import { ModalService } from "../../_modal/modal.service";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { single } from './data';

@Component({
  selector: "app-estado",
  templateUrl: "./estado.component.html",
  styleUrls: ["./estado.component.scss"]
})
export class EstadoComponent implements OnInit {
  single: any[];
  view: any[] = [1200, 350];

   // options
   showLegend: boolean = true;
   showLabels: boolean = true;


   colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private modalService: ModalService) {
    Object.assign(this, { single });
  }

  ngOnInit(): void {}

  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}

onSelect(event) {
  console.log(event);
}
}
