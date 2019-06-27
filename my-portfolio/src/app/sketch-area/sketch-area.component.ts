import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as p5 from 'p5'
import { Ball } from './ball';
import { Earth } from './earth';

@Component({
  selector: 'app-sketch-area',
  templateUrl: './sketch-area.component.html',
  styleUrls: ['./sketch-area.component.css']
})
export class SketchAreaComponent implements OnInit {

  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  ball : Ball;
  earth : Earth;
  ps5: any;
  
  constructor() {
    this.ball = new Ball();
    this.earth = new Earth();
  }

  ngOnInit() {
    this.createcanvas();
  }

  createcanvas(): any {
    this.ps5 = new p5(this.earth.sketch, 'c1');
    this.ps5 = new p5(this.ball.sketch, 'c2');
  }

}
