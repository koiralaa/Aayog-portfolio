import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
    this.ps5 = new p5(this.sketch1, 'c1');
    this.ps5 = new p5(this.sketch2, 'c2');
  }

  private sketch1(p: any) {
    var x : number, y : number;
    var img;
    var isRound;
    p.setup= () => {
      img = p.loadImage("/assets/images/earth_texture.jpg");
      p.createCanvas(640, 480, p.WEBGL);
      x = 0;
      y = 20;
      isRound = true;
    } 

    p.draw = () => {
      var mapped = p.map(p.mouseX, 0, p.width, -200, 100);
      if(mapped > 100) mapped = 100;
      p.translate(0, 0, mapped);
      p.background(80);
      p.rectMode(p.CENTER);
      p.rotateX(-p.PI/8);
      p.rotateY(x);
      //rotateZ(x);
      p.noStroke();
      p.strokeWeight(0.1);
      p.fill(0, 0, 255);
      p.texture(img);
      if (!isRound) {
        p.rotateX(p.PI/2 + p.PI/8);
        p.torus(150, 100);
      } else {
        p.ellipsoid(200, 190, 200);
      }
      x+=0.01;// * noise(x) * 10;
    }

    p.mousePressed = () => {
      if(p.mouseX < p.width && p.mouseY < p.height && p.mouseX > 0 && p.mouseY > 0){
        p.ellipse(p.mouseX, p.mouseY, 50, 50);
        isRound = !isRound;
      }
    }
  }
  private sketch2(p: any) {
    var x, y, xSpeed, ySpeed;
    p.setup= () => {
      p.createCanvas(640, 480);
      x = p.width/2;
      y = p.height/2;
      xSpeed = 10;
      ySpeed = 10;
    }

    p.draw = () => {
      p.background(0);
      p.fill(255);
      p.ellipse(x, y, 16, 16);
      x += xSpeed * p.random() * 0.5;
      y += ySpeed * p.random() * 0.5;
      if(x > p.width || x < 0) xSpeed *= -1;
      if(y > p.height || y < 0) ySpeed *= -1;
      
    }
  }

}
