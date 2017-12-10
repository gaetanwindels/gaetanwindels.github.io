import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-snow',
  templateUrl: './snow.component.html',
  styleUrls: ['./snow.component.css']
})
export class SnowComponent implements OnInit {

  context: any;

  canvas: any;

  flakesX: any;

  flakesY: any;

  matrix: boolean = false;

  constructor() { }

  ngOnInit() {
    this.matrix = window.location.search.substr(1) === "TUMS-SAOU-LESA-VECT-CLES";

    if (!this.matrix) {
      document.getElementsByTagName('canvas')[0].style.filter = 'blur(2px)';
    }

    this.canvas = document.getElementById("snow");
    this.context = this.canvas.getContext("2d");
    this.context.font = "48px serif";

    this.context.webkitImageSmoothingEnabled = true;
    this.flakesX = new Array((screen.width / 6) | 0);
    this.flakesY = new Array((screen.width / 6) | 0);

    for (let i = 0; i < this.flakesX.length; i++) {
        this.flakesX[i] = Math.random() * screen.width;
        this.flakesY[i] = -1 * (Math.random() * screen.height);
    }

    this.draw();

  }

  draw() {
    window.requestAnimationFrame(() => {
      this.canvas.width  = window.innerWidth;
      this.canvas.height = window.innerHeight;
      if (this.matrix) {
        this.context.fillStyle = "rgb(0, 255, 0)";
      } else {
        this.context.fillStyle = "rgb(255, 255, 255)";
      }
      this.context.font = "30px Lucida Console";

      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      //this.context.filter = 'blur(1px)';
      for (let i = 0; i < this.flakesY.length; i++) {
        this.flakesY[i]++;
        if (this.matrix) {
          this.flakesY[i] = this.flakesY[i] + 5;
          this.context.fillText(String.fromCharCode(i), this.flakesX[i], this.flakesY[i]);
        } else {
          this.context.beginPath();
          this.context.globalAlpha = (i % 3 + 7) / 10;
          this.context.arc(this.flakesX[i], this.flakesY[i], i % 3 + 2, 0, 2 * Math.PI);
          this.context.fill();
        }

        if (this.flakesY[i] > screen.height) {
          this.flakesX[i] = Math.random() * screen.width;
          this.flakesY[i] = 0;
        }
      }

      this.draw();
    });
  }

}
