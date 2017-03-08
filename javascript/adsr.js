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
    fill(10);
    noStroke();
    rect(width * 2 / 3, height - 400, width / 3, 250);

    push();
    translate(width * 2 / 3, height - 400);
    stroke(255);
    strokeWeight(10);
    point(30, 200);
    pop();
  }
}
