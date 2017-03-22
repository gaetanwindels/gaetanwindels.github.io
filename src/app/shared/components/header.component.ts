import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
    selector: 'header-chrono',
    template: require('./header.template.html'),
    styles: [ require('./header.style.scss')],
    encapsulation: ViewEncapsulation.None
})

export class HeaderComponent {
    @Input() title;
}