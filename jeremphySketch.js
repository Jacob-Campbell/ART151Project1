function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 230, 230);
  alert("Here are my crawling polgons");

  jeremphys = [];
}

/* var x1 = 270;
var y1 = 200;
var x2 = 460;
var y2 = 200;
var x3 = 650;
var y3 = 480;
var x4 = 340;
var y4 = 380;
let val = 0; */

function draw() {
  stroke(0, 0, 0);
  strokeWeight(2);
  
  for (let i = 0; i < jeremphys.length; i++) {
    jeremphys[i].update();
    jeremphys[i].show();
  }

  // jeremphy prime code
  // fill((x2/windowWidth * 255), (y3/windowHeight * 255), (x4/windowWidth * 255));
  // quad(x1, y1, x2, y2, x3, y3, x4, y4);

  /* val = int(random(0, 8));

    switch(val) {
      case 0:
        x1 = x1 + random(0, 15);
        break;
      case 1:
        y1 = y1 + random(0, 15);
        break;
      case 2:
        x2 = x2 + random(0, 15);
        break;
      case 3:
        y2 = y2 + random(0, 15);
        break;
      case 4:
        x3 = x3 + random(0, 15);
        break;
      case 5:
        y3 = y3 + random(0, 15);
        break;
      case 6:
        x4 = x4 + random(0, 15);
        break;
     case 7:
        y4 = y4 + random(0, 15);
        break;
      default:
        // garbage state, if you end up here you are a failure. I live here. Welcome to my home.
  }*/

}

function mousePressed() {
  jeremphys.push(new Jeremphy(mouseX, mouseY));
}

function Jeremphy(mX, mY) {
  print("new jeremphy");
  fill((x2/windowWidth * 255), (y3/windowHeight * 255), (x4/windowWidth * 255));
  var x1 = mX - 3;
  var y1 = mY - 3;
  var x2 = mX + 3;
  var y2 = mY - 3;
  var x3 = mX + 3;
  var y3 = mY + 3;
  var x4 = mX - 3;
  var y4 = mY + 3;
  quad(x1, y1, x2, y2, x3, y3, x4, y4);

  this.update = function() {
    val = int(random(0, 8));

    switch(val) {
      case 0:
        x1 = x1 + random(0, 15);
        break;
      case 1:
        y1 = y1 + random(0, 15);
        break;
      case 2:
        x2 = x2 + random(0, 15);
        break;
      case 3:
        y2 = y2 + random(0, 15);
        break;
      case 4:
        x3 = x3 + random(0, 15);
        break;
      case 5:
        y3 = y3 + random(0, 15);
        break;
      case 6:
        x4 = x4 + random(0, 15);
        break;
     case 7:
        y4 = y4 + random(0, 15);
        break;
      default:
        // garbage state, if you end up here you are a failure. I live here. Welcome to my home.
    }
  }

  this.show = function() {
    fill((x2/windowWidth * 255), (y3/windowHeight * 255), (x4/windowWidth * 255));
    quad(x1, y1, x2, y2, x3, y3, x4, y4);
  }
}