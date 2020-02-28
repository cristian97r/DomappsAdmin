import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-sidebar-tmx',
  templateUrl: './sidebar-tmx.component.html',
  styleUrls: ['./sidebar-tmx.component.scss']
})
export class SidebarTmxComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
