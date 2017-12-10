import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  isOpen: boolean = false;
  text: string = "";
  modal: any = {};

  constructor(private modalService: ModalService) {
    this.isOpen = modalService.open;
    this.text = modalService.text;
    this.modal = modalService;
  }

  ngOnInit() {

  }

}
