import { Injectable }from '@angular/core';

@Injectable()
export class TimeService {

    restTime: number;

    serieCount: number;

    setRestTime(restTime) {
        this.restTime = restTime;
    }

    getRestTime() {
        return this.restTime;
    }

    setSerieCount(serieCount) {
        this.serieCount = serieCount;
    }

    getSerieCount() {
        return this.serieCount;
    }

    sayHello() {
        alert(this.restTime);
    }

}