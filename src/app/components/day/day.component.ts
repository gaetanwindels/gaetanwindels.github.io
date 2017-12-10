import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input() isOpen = false;
  @Input() text = "";
  @Input() number;

  isLocked: boolean = true;

  constructor(private modalService: ModalService) {

  }

  ngOnInit() {
    this.isLocked = new Date().getDate() < this.number;
    //this.isLocked = false;
  }

  public isAlreadyOpen() {
    let day = JSON.parse(window.localStorage.getItem("days"))[this.number - 1];
    return day;
  }

  public showText() {
    if (!this.isLocked) {
      this.modalService.setText(this.text);
      let days = JSON.parse(window.localStorage.getItem("days"));
      days[this.number - 1] = true;
      days = JSON.stringify(days);
      window.localStorage.setItem("days", days);
    } else {
      this.modalService.setText("Un peu de patience... Tu pourras ouvrir celui là dans " + (this.number - new Date().getDate()) + " jour(s)<br /><br /><img src='assets/img/wat.jpg' />");
    }
    this.modalService.show();
  }
}
