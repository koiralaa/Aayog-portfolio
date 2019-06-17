function setup() {
    createCanvas(480, 320);
    x = width/2;
    y = height/2;
    xSpeed = 1;
    ySpeed = 1;
}
var x, y, xSpeed, ySpeed;

function draw(){
    background(0);
    ellipse(x, y, 16,16);
    x+=xSpeed;
    y+=ySpeed;
    if(x > width || x < 8) xSpeed *= -1;
    if(y > height || y < 8) ySpeed *= -1;
       
}