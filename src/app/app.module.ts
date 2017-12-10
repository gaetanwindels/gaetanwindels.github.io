import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './services/data.service';
import { ModalService } from './services/modal.service';
import { SafeHtmlPipe } from './services/pipe.safehtml';


import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { DayComponent } from './components/day/day.component';
import { ModalComponent } from './components/modal/modal.component';
import { SnowComponent } from './components/snow/snow.component';

@NgModule({
  declarations: [
    AppComponent,
    SafeHtmlPipe,
    CalendarComponent,
    DayComponent,
    ModalComponent,
    SnowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService, ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
