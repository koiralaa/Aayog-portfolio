export class Earth{
    public  sketch(p: any) {
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
      
}