function Reverb() {

  this.update = function() {

  }

  this.render = function() {
    push();
    translate(width / 3, height - rowHeight);

    noStroke();
    textAlign(LEFT, TOP);
    textSize(30);
    fill(255, 200);
    text("REVERB", 30, 20);

    // Render visualization
    pop();
  }
}
