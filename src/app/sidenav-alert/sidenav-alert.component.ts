import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ModalService } from '../_modal';
import { single } from './data';

@Component({
  selector: 'app-sidenav-alert',
  templateUrl: './sidenav-alert.component.html',
  styleUrls: ['./sidenav-alert.component.scss']
})
export class SidenavAlertComponent implements OnInit {
  mode = new FormControl('over');
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

  ngOnInit(): void {

  }

  onSelect(event) {
    console.log(event);
  }

}
