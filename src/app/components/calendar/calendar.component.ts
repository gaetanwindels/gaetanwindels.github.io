import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  texts: string[] = []

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.texts = this.dataService.get();
  }

}
