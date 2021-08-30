function setup() {
  createCanvas(300, 400);
}

var x = 4;
var z = 134;

function draw() {
  background(255, 255, 0);
  
  stroke(0, 0, 0);
  strokeWeight(10);
  rect(49, 99, 50, 100, 50, 50, 0, 0);
  rect(199, 99, 50, 100, 50, 50, 0, 0);
  rect(49, 249, 200, 75, 50, 50, 0, 0);
  strokeWeight(5);
  line(44, 209, 104, 209);
  line(194, 209, 254, 209);
  circle(149, 284, 50);
  point(z - 5, 274);
  point(z + 5, 274);
  circle(z, 284, 5);
  rect(x, 14, 25);
  
  x = x + 1;
  z = z + 0.1;
  
  if(x > 269) {
    x = 4;
    z = 134;
  }
  
}