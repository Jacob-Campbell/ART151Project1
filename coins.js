var bigMoney;

function preload() {
  //bigMoney = loadSound('cashmoney.mp3'); // loading the sound for the coins
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  balls = []; // rename this array to coins at some point, idk maybe later, we'll see if I actually do it

}

function draw() {
  background(0, 150, 150);
  
  for(let i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].show();
  }

}


function mousePressed() {
  balls.push(new Ball(mouseX, mouseY)); // Alternatively can key off of mouseX and mouseY, but I don't think I will because random locations are more fun
  bigMoney.play(); // play sound when a coin is created
}


function Ball(x, y) { // rename to Coin
  this.pos = createVector(x, y);
  this.dir = createVector(random(-1, 1), random(-1, 1));
  this.speed = random(5, 10);
  this.spinRate = 0;
  this.tails = true;

  this.update = function() {
    uPos = p5.Vector.mult(this.dir, this.speed);
    this.pos.add(uPos);

    if(this.pos.x < 0 || this.pos.x > windowWidth){
      this.dir.x *= -1;
    }

    if(this.pos.y < 0 || this.pos.y > windowHeight){
      this.dir.y *= -1;
    }
    
  }

  this.show = function() {
    stroke(0);
    if(this.tails == true) {
      this.spinRate = this.spinRate + 5;
      print(this.spinRate);
      if(this.spinRate > 45) {
        this.tails = false;
      }
    } else { // finally got this son of a gun to rotate
      this.spinRate = this.spinRate - 5;
      if(this.spinRate < 5) {
        this.tails = true;
      }
    }
    
    shapecolor = 255 * (this.spinRate/50);
    fill(shapecolor, shapecolor, 0);
    ellipse(this.pos.x, this.pos.y, this.spinRate, 50); // Down with perfect shapes

  }

}