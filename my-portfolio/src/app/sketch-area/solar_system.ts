import * as p5 from 'p5';
import { resetFakeAsyncZone } from '@angular/core/testing';

export class SolarSystem{
    public sketch(p: any) {

        class HeavenlyBody{
            pos : p5.Vector;
            vel : p5.Vector;
            acc : p5.Vector;
            mass : number;
            stopped : boolean;
            G = 50;
            maxForce = 20;
            constructor(x : number, y : number, dx : number, dy : number, mass : number){
                this.pos = p.createVector(x, y);
                this.vel = p.createVector(dx, dy);
                this.acc = p.createVector(0, 0);
                this.mass = mass;
                this.stopped = false;
            }
        
            update(){
                if(!this.stopped){
                    this.vel.add(this.acc);
                    this.pos.add(this.vel);
                    this.acc.mult(0);
                }
            }

            reset(){
                this.acc = p.createVector(0, 0);
                this.vel = p.createVector(0, 0);
                this.acc = p.createVector(0, 0);
                this.stopped = false;
            }

            attract(body : HeavenlyBody){
                let f : p5.Vector;
                let r : number;
                f = p5.Vector.sub(this.pos, body.pos);
                r = f.mag();
                if(r < this.mass) {
                    if(body.mass < this.mass) {
                        body.stopped = true;
                        this.vel.mult(0);
                        this.reset();
                    }
                } else {
                    let force = (this.G * this.mass) / Math.pow(r, 2);
                    f.setMag(force);
                    body.acc = f;
                }
            }
            show(){
                if(!this.stopped){
                    p.fill(255);
                    p.noStroke();
                    p.ellipse(this.pos.x, this.pos.y, this.mass, this.mass);
                    p.stroke(255);
                    p.line(this.pos.x, this.pos.y, this.pos.x + this.vel.x * 20, this.pos.y + this.vel.y * 20);
                }
            }
        }
        
        var sun : HeavenlyBody;
        var earth : HeavenlyBody;

        var reset = () => {
            sun = new HeavenlyBody(p.width/2, p.height/2, 0, 0, 80);
            earth = new HeavenlyBody(3 * p.width/4, 100, -5, .1, 20);
        }

        p.setup= () => {
          p.createCanvas(p.windowWidth/2, p.windowHeight);
          reset();
        }
    
        p.draw = () => {
          p.background(0);
          sun.attract(earth);
        //   earth.attract(sun);
          sun.update();
          earth.update();
          sun.show();
          earth.show(); 
          p.rect(p.width - 100, 0, 100, 30);
          p.stroke(0);
          p.fill(0);
          p.text("Reset", p.width - 50, 10);
        }

        p.mousePressed = () => {
            earth = new HeavenlyBody(p.mouseX, p.mouseY, -5, .1, p.random(70));
            if((p.mouseX > p.width - 100 && p.mouseX < p.width) || (p.mouseY > 0 && p.mouseY < 30)){
                reset();
            }
        }

      }
}