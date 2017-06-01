
var x = -40; // x position
var y = 0; // y position
var x1 = 40; // x1 position
var y1 = 0; // y1 position

var s = 40; // Size
var speed = 8; // Speed

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    background(0, 6);
}

function draw() {
  background(0, 10)
  var r = floor(random(0, 4))
  translate(width/2, height/2)

    switch (r) {
      case 3:
          y -= speed; // Up
          y1 += speed; // Up
                break;
      case 0:
        x -= speed; // Left
        x1 += speed; // Right
                break;

      case 1:
        y += speed ; // Down
        y1 -= speed ; // Down
                break;

      case 2:
        x += speed; // Rightl
        x1 -= speed; // Left
                break;

    }

    for(var i=0; i<9; i++){
      s = random(4)
      rotate(radians(30))
      smooth();
      // fill(186, 52, 0);
      fill(237, 133, 0)
      stroke(255)
      ellipse(x1+i, y1, s, s);

      // fill(173, 130, 12);
      fill(237, 133, 0)
      stroke(255)
      ellipse(x+i, y, s, s);
    }


}
