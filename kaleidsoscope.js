function setup() {
    createCanvas(windowWidth, windowHeight);
    
    // rectMode(CENTER);
    alert("get ready for my bad triangles");
    mytriangles = [];
    translate(windowWidth / 2, windowHeight / 2);
}

var angle = 0;
let isRotate = false;

function draw() {
    background(0, 0, 0);
    angleMode(DEGREES);
    translate(windowWidth / 2, windowHeight / 2);

    mytriangles.push(new myTriangle());
    mytriangles.push(new myTriangle());
    mytriangles.push(new myTriangle());

    for(let i = 0; i < 3; i++) {
        mytrianlges[i].update;
        mytriangles[i].show;
    }
    
    
    
    fill(random(0, 255), random(0, 255), random(0, 255));
    rect(100, 200, 40, 30); // my guide humphrey

    /*
        var x1 = random(0.0, height / 2);
        var y1 = random(0.0, x1);
        var x2 = random(0.0, height / 2);
        var y2 = random(0.0, x2);
        var x3 = random(0.0, height / 2);
        var y3 = random(0.0, x3);

        
        //triangle(12, 20, 13, 30, 14, 40);
        triangle( x1, y1, x2, y2, x3, y3 );
        triangle( -x1, y1, -x2, y2, -x3, y3 );
        triangle( x1, -y1, x2, -y2, x3, -y3 );
        triangle( -x1, -y1, -x2, -y2, -x3, -y3 );
        triangle( y1, x1, y2, x2, y3, x3 );
        triangle( -y1, x1, -y2, x2, -y3, x3 );
        triangle( y1, -x1, y2, -x2, y3, -x3 );
        triangle( -y1, -x1, -y2, -x2, -y3, -x3 );
      */

    /*if (isRotate == true) {
        angle = angle + 1;
        rotate(angle);
    }*/

}

/*function mousePressed() {
    if(isRotate == false) {
        isRotate = true;
    } else {
        isRotate = false;
    }
}*/

function myTriangle() {
    var x1 = random(0.0, height / 2);
    var y1 = random(0.0, x1);
    var x2 = random(0.0, height / 2);
    var y2 = random(0.0, x2);
    var x3 = random(0.0, height / 2);
    var y3 = random(0.0, x3);

    this.update = function() {
        // nothing at the moment
    }

    this.show = function() {
        
        fill(random(0, 255), random(0, 255), random(0, 255));
        trianlge( x1, y1, x2, y2, x3, y3 );
        trianlge( -x1, y1, -x2, y2, -x3, y3 );
        trianlge( x1, -y1, x2, -y2, x3, -y3 );
        trianlge( -x1, -y1, -x2, -y2, -x3, -y3 );
        trianlge( y1, x1, y2, x2, y3, x3 );
        trianlge( -y1, x1, -y2, x2, -y3, x3 );
        trianlge( y1, -x1, y2, -x2, y3, -x3 );
        trianlge( -y1, -x1, -y2, -x2, -y3, -x3 );

    }
}