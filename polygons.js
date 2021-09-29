
function setup() {
    createCanvas(windowWidth, windowHeight);
    alert("hello, how do you do, welcome. These are my bad triangles, the triangles are my focus. I hope there are mildly pleasing to look at.");
    gons = [];
}

function draw() {
    background( 20, 0, 50 );
    translate(windowWidth / 2, windowHeight / 2);

    for( let i = 0; i < gons.length; i++ ) {
        gons[i].update();
        gons[i].show();
    }

}

function mousePressed() {
    gons.push( new babyGon( random( 0, ( windowWidth / 2) ), random( 0, ( windowHeight / 2 ) ) ) );
}

function babyGon( x, y ) {
    this.pos1 = createVector( x, y );
    this.pos2 = createVector( x, y );
    this.pos3 = createVector( x, y );
    //this.pos4 = createVector( x, y );
    this.dir1 = createVector( random( -1, 1 ), random( -1, 1 ) );
    this.dir2 = createVector( random( -1, 1 ), random( -1, 1 ) );
    this.dir3 = createVector( random( -1, 1 ), random( -1, 1 ) );
    //this.dir4 = createVector( random( -1, 1 ), random( -1, 1 ) );
    this.speed1 = random( 3, 8 );
    this.speed2 = random( 3, 8 );
    this.speed3 = random( 3, 8 );
    //this.speed4 = random( 3, 10 );

    this.update = function() {
        uPos1 = p5.Vector.mult( this.dir1, this.speed1 );
        this.pos1.add( uPos1 );
        uPos2 = p5.Vector.mult( this.dir2, this.speed2 );
        this.pos2.add( uPos2 );
        uPos3 = p5.Vector.mult( this.dir3, this.speed3 );
        this.pos3.add( uPos3 );
        //uPos4 = p5.Vector.mult( this.dir4, this.speed4 );
        //this.pos4.add( uPos4 );

        if(this.pos1.x < 0 || this.pos1.x > ( windowWidth / 2 )){
            this.dir1.x *= -1;
        }
      
        if( this.pos1.y < 0 || this.pos1.y > windowHeight ) {
            this.dir1.y *= -1;
        }

        if( this.pos2.x < 0 || this.pos2.x > ( windowWidth / 2 ) ) {
            this.dir2.x *= -1;
        }
      
        if( this.pos2.y < 0 || this.pos2.y > windowHeight ) {
            this.dir2.y *= -1;
        }

        if( this.pos3.x < 0 || this.pos3.x > ( windowWidth / 2 ) ) {
            this.dir3.x *= -1;
        }
      
        if( this.pos3.y < 0 || this.pos3.y > windowHeight ) {
            this.dir3.y *= -1;
        }

        /*if( this.pos4.x < 0 || this.pos4.x > windowWidth ) {
            this.dir4.x *= -1;
        }
      
        if( this.pos4.y < 0 || this.pos4.y > windowHeight ) {
            this.dir4.y *= -1;
        }*/

    }

    this.show = function() {
        //stroke( 0 );
        shapecolor1 = 255 * ( this.pos1.x / windowWidth );
        shapecolor2 = 255 * ( this.pos3.y / windowWidth );
        fill( shapecolor1, 0, shapecolor2 );
        //quad( this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y, this.pos3.x, this.pos3.y, this.pos4.x, this.pos4.y );
        triangle( this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y, this.pos3.x, this.pos3.y );
        triangle( -this.pos1.x, this.pos1.y, -this.pos2.x, this.pos2.y, -this.pos3.x, this.pos3.y );
        triangle( this.pos1.x, -this.pos1.y, this.pos2.x, -this.pos2.y, this.pos3.x, -this.pos3.y );
        triangle( -this.pos1.x, -this.pos1.y, -this.pos2.x, -this.pos2.y, -this.pos3.x, -this.pos3.y );
        //triangle( this.pos1.y, this.pos1.x, this.pos2.y, this.pos2.x, this.pos2.y, this.pos3.y );
        //triangle( -this.pos1.y, this.pos1.x, -this.pos2.y, this.pos2.x, -this.pos2.y, this.pos3.y );
    }
}