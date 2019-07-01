export class Ball{
    public sketch(p: any) {
        var x, y, xSpeed, ySpeed;
        p.setup= () => {
          p.createCanvas(p.windowWidth/2, p.windowHeight);
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