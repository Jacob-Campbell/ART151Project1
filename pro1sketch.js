
function setup() {
  createCanvas(windoowWidth, windowHeight);
  ball = new Ball(150, 150);
  ball2 = new Ball(300, 300);

}


function draw() {
  background(0, 150, 150);
  
  ball.update();
  ball.show();
  ball2.update();
  ball2.show();
}


function Ball(x, y){
  this.pos = createVector(x, y);
  this.dir = createVector(random(-1, 1), random(-1, 1));
  this.speed = random(0, 3);

  this.update = function(){
    uPos = p5.Vector.mult(this.dir, this.speed);
    this.pos.add(uPos);
  }

  this.show = function(){
    stroke(0);
    fill(100, 0, 0);
    ellipse(this.pos.x, this.pos.y, 50, 50); // Down with perfect shapes
  }

}