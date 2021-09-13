
function setup() {
  createCanvas(windowWidth, windowHeight);
  bigMoney = loadSound('cashmoney.mp3')
  coins = [];

}

function draw() {
  background(0, 150, 150);
  
  for(let i = 0; i < coins.length; i++) {
    coins[i].update();
    coins[i].show();
  }

}


function mousePressed() {
  coins.push(new Coin(random(0, windowWidth), random(0, windowHeight))); // Alternatively can key off of mouseX and mouseY
  bigMoney.isPlaying();
}


function Coin(x, y) {
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
    } else {
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