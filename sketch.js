var ship;
var astroids = [];
function setup() {
    createCanvas(windowWidth, windowHeight);
    ship = new Ship();
    for (var i=0; i<random(5, 15); i++) {
        astroids.push(new Astroid());
    }
  }
  
  function draw() {
    background(0);
    ship.render();
    ship.turn();
    ship.update();
    ship.edges();
    for (var i =0; i< astroids.length; i++) {
        astroids[i].render();
        astroids[i].update();
        astroids[i].edges();
    }
  }

  function keyReleased() {
      ship.setRotation(0);
      ship.boosting(false);
  }

  function keyPressed(){
      if (keyCode == RIGHT_ARROW) {
          ship.setRotation(0.1);
      }
      else if (keyCode == LEFT_ARROW) {
          ship.setRotation(-0.1);
      }
      else if (keyCode == UP_ARROW) {
          ship.boosting(true);
      }
  }
  
  