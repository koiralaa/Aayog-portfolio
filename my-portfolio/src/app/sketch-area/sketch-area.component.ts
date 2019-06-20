import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Sketch } from '../sketch';
import { SKETCHES } from '../mock-sketches'
import * as p5 from 'p5'

@Component({
  selector: 'app-sketch-area',
  templateUrl: './sketch-area.component.html',
  styleUrls: ['./sketch-area.component.css']
})
export class SketchAreaComponent implements OnInit {

  @ViewChild('canvas', { static: false }) canvas: ElementRef;

  ps5: any;
  
  constructor() { }

  ngOnInit() {
    this.createcanvas();
  }

  createcanvas(): any {
    this.ps5 = new p5(this.sketch, 'c1');
    this.ps5 = new p5(this.sketch, 'c2');
  }

  private sketch(p: any) {
    let xSpeed = 1;
    let ySpeed = 1;
    p.setup = () => {
      p.createCanvas(480, 320);
    };

    p.draw = () => {
      p.background(0);
      p.ellipse(p.width / 2, p.height / 2, 16, 16);
      p.width += xSpeed ;
      p.height += ySpeed;
      if (p.width > (480 * 2 - 8) || p.width < 8) xSpeed *= -1;
      if (p.height > (320 * 2 - 8) || p.height < 8) ySpeed *= -1;
    };
  }
}
