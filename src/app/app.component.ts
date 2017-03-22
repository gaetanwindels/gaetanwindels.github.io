import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app',
    template: `<router-outlet></router-outlet>`,
    styles: [ require('./../assets/styles/style.scss')],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent {

}