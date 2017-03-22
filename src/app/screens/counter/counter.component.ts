import { Component } from '@angular/core';
import { TimeService } from './../../shared/services/time.service';

@Component({
    selector: 'counter',
    template: require('./counter.template.html'),
    styles: [ require('./counter.style.scss') ]
})

export class CounterComponent {

    title: string;

    restTime: number;

    serieCount: number;

    restActive: boolean;

    constructor(private _timeService: TimeService) {
        this.title = "Counting!";

        this.restActive = false;

        this.restTime = this._timeService.getRestTime();

        this.serieCount = this._timeService.getSerieCount();
    }

    getButtonText() {
        if (this.restActive) {
            return 'Repos en cours...';
        } else {
            return 'Démarrer repos';
        }
    }

    getRestTime() {
        return this._timeService.getRestTime();
    }

    getSerieCount() {
        return this._timeService.getSerieCount();
    }

    manageRest() {
        setTimeout(() => {
            this.restTime = Math.max(0, this.restTime - 1);
            if (this.restTime > 0) {
                this.manageRest();
            } else {
                this.restTime = this._timeService.getRestTime();
                this.serieCount = Math.max(0, this.serieCount - 1);
                this.restActive = false;
                window.navigator.vibrate(3000);
            }
        },  1000);
    }

    startRest() {
        if (this.restActive) {
            return;
        }
        this.restActive = true;
        this.manageRest();

    }
}