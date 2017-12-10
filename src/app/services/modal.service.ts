import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {

  public text: string = "";
  public open: boolean = false;

  constructor() {

  }

  isOpen() {
    return this.open;
  }

  setText(text: string) {
    this.text = text;
  }

  getText() {
    return this.text;
  }

  show() {
    this.open = true;
  }

  hide() {
    this.open = false;
  }

  toggle() {
    this.open = !this.isOpen;
  }
}
