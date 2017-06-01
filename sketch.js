// w = up
// a = left
// s = down
// d = right
//

var inc = 0;
var yoff = 1;
var zoff = 1;

var x = -10; // x position
var y = 0; // y position
var x1 = 10; // x1 position
var y1 = 0; // y1 position

var s = 1; // Size
var speed = 4; // Speed

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    background(0, 6);
}

function draw() {
  translate(width/2, height/2)
    var inc = inc + 1;
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
        x += speed; // Rightl
      	x1 -= speed; // Left
    }


    rotate(TWO_PI+inc/4)
    for(var i=0; i<90; i++){

      rotate(cos(50.0))
      smooth();
      // fill(186, 52, 0);
      // fill(244, 209, 66)
      stroke(186, 52, 0)
      ellipse(x1+i, y1, s, s);

      // fill(173, 130, 12);
      // fill(244, 209, 66)
      stroke(186, 52, 0)
      ellipse(x+i, y, s, s);
    }

    yoff += 2;
    zoff += 1;

}
