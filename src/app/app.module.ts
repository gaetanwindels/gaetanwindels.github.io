import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { appRoutes } from './app.routes';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ChoiceComponent } from './screens/choice/choice.component';
import { HomeComponent } from './screens/home/home.component';
import { CounterComponent } from './screens/counter/counter.component';
import { HeaderComponent } from './shared/components/header.component';

import { TimeService } from './shared/services/time.service'

@NgModule({
    imports: [ BrowserModule,
               FormsModule,
               RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent, ChoiceComponent, HomeComponent, CounterComponent, HeaderComponent ],
    bootstrap:    [ AppComponent ],
    providers: [ TimeService ]
})

export class AppModule { }