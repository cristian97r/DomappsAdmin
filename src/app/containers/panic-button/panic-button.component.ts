import { Component, OnInit } from "@angular/core";
import { ModalService } from 'src/app/_modal';

@Component({
  selector: "app-panic-button",
  templateUrl: "./panic-button.component.html",
  styleUrls: ["./panic-button.component.scss"]
})
export class PanicButtonComponent implements OnInit {
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {}

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
}
