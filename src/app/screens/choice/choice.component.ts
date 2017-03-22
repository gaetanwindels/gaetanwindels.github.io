import { Component } from '@angular/core';
import { TimeService } from './../../shared/services/time.service'
import { Router } from '@angular/router';

@Component({
    selector: 'component',
    template: require('./choice.template.html'),
    styles: [ require('./choice.style.scss') ]
})

export class ChoiceComponent {

    constructor(private _timeService: TimeService, private _router : Router) {

    }

    title = "The title"

    countSerie = 0;

    countRest = 0;

    formattedCountRest = "00:00";

    goToCount() {
        this._timeService.setRestTime(this.countRest);
        this._timeService.setSerieCount(this.countSerie);
        console.log(this._timeService.getRestTime());
        console.log(this.countRest);
        this._router.navigate(['/count']);
    }

    increaseCount() {
        this.countSerie++;
    }

    increaseRestCount() {
        this.countRest += 5;
        this.formatCountRest();
    }

    decreaseRestCount() {
        this.countRest = Math.max(this.countRest - 5, 0);
        this.formatCountRest();

    }

    decreaseCount() {
        this.countSerie = Math.max(this.countSerie - 1, 0);
    }

    formatCountRest() {
        let seconds = this.countRest % 60;
        let minutes = (this.countRest / 60) | 0;
        let minutesString = minutes >= 10 ? `${minutes}` : `0${minutes}`;
        let secondsString = seconds >= 10 ? `${seconds}` : `0${seconds}`;;

        this.formattedCountRest = `${minutesString}:${secondsString}`;
    }
}