function ADSR() {
  // Initialize envelope parameters
  this.attackLevel = 0.5;
  this.releaseLevel = 0;
  this.attackTime = 0.001;
  this.decayTime = 0.3;
  this.susPercent = 0.4;
  this.releaseTime = 0.5;

  env = new p5.Env();

  this.init = function() { // Initialize envelope with parameters

    env.setADSR(this.attackTime, this.decayTime, this.susPercent, this.releaseTime);
    env.setRange(this.attackLevel, this.releaseLevel);
  }

  this.update = function() { // Update envelope on updated parameters
    env.setADSR(this.attackTime, this.decayTime, this.susPercent, this.releaseTime);
    env.setRange(this.attackLevel, this.releaseLevel);
  }

  this.render = function() { // Render visualization of envelope
    push();
    translate(width * 2 / 3, height - rowHeight);

    noStroke();
    textAlign(LEFT, TOP);
    textSize(30);
    fill(255, 200);
    text("ADSR", 30, 20);

    textSize(15);
    fill(255, 150);
    //text("wavetype " + this.wavetype, (this.id) * width / 3 + 30, height - rowHeight * 2 + 60);

    //Render visualization
    noFill();
    stroke(255);
    rect


    stroke(255);
    strokeWeight(10);
    point(30, 150);


    pop();
  }
}
