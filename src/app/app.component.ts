import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    if (window.location.search.substr(1) === "TUMS-SAOU-LESA-VECT-CLES") {
      alert("Bravo, tu es une petite pirate, et tu vas dorénavant rentrer dans la matrice");
      document.body.style.background = "black";
    }

    if (!window.localStorage.getItem("days")) {
      let days = new Array(31).fill(false);
      window.localStorage.setItem("days", JSON.stringify(days));
    }
  }
}
