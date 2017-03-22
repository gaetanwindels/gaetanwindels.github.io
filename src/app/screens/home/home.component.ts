import { Component } from '@angular/core';

@Component({
    selector: 'component',
    template: `<a routerLink="/choice" routerLinkActive="active">Choice</a>
               <a routerLink="/home" routerLinkActive="active">Home</a>`
})

export class HomeComponent {
}