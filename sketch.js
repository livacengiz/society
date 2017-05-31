// w = up
// a = left
// s = down
// d = right
//

var palet = {
  renk1: "214, 157, 14"
}

var yoff = 1;
var zoff = 1;

var x = -30; // x position
var y = 0; // y position
var x1 = 30; // x1 position
var y1 = 0; // y1 position

var s = 1; // Size
var speed = 3; // Speed

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    background(255, 90);
}

function draw() {

  background(0, 10)
  translate(width/2, height/2)

    var z1 = map(noise(yoff), 0, 1, 0, 40);
    var z2 = map(noise(zoff), 0, 1, 0, 40);

    // Handle keyboard input
    if (keyIsDown("W".charCodeAt(0)) || keyIsDown(UP_ARROW)) {
        y -= speed; // Up
        y1 -= speed; // Up
    }
    if (keyIsDown("A".charCodeAt(0)) || keyIsDown(LEFT_ARROW)) {
        x -= speed; // Left
      	x1 += speed; // Right
    }
    if (keyIsDown("S".charCodeAt(0)) || keyIsDown(DOWN_ARROW)) {
        y += speed; // Down
        y1 += speed; // Down
    }
    if (keyIsDown("D".charCodeAt(0))|| keyIsDown(RIGHT_ARROW)) {
        x += speed; // Right
      	x1 -= speed; // Left
    }



    for(var i=0; i<192; i++){

      rotate(TWO_PI/75.0)
      smooth();
      // fill(186, 52, 0);
      fill(palet.renk1)
      stroke(palet.renk1)
      ellipse(x1+i, y1, s, s);

      // fill(173, 130, 12);
      fill(palet.renk1)
      stroke(palet.renk1)
      ellipse(x+i, y, s, s);
    }

    yoff += 2;
    zoff += 1;

}
