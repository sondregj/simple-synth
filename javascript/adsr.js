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

    textSize(20);
    fill(255, 150);
    //text("wavetype " + this.wavetype, (this.id) * width / 3 + 30, height - rowHeight * 2 + 60);

    text("attack " + this.attackTime * 1000 + "ms", 30, 60 + 0 * 30);
    text("decay " + this.decayTime * 1000 + "ms", 30, 60 + 1 * 30);
    text("sustain " + this.susPercent * 100 + "%", 30, 60 + 2 * 30);
    text("release " + this.releaseTime * 1000 + "ms", 30, 60 + 3 * 30);

    //Render visualization
    translate(225, 25);
    fill(255, 20);
    noStroke();
    rect(0, 0, width / 3 - 250, rowHeight - 80);

    noFill();
    stroke(255);
    strokeWeight(10);
    point(0, rowHeight - 80); // Left anchorpoint

    var dx = map(this.attackTime, 0, 1.0, 10, (width / 3 - 250) / 4);
    point(dx, 0); // Attack end anchorpoint

    var decayx = dx + map(this.decayTime, 0, 1.0, 10, (width / 3 - 250) / 4);
    var decayy = map(this.susPercent, 0, 1.0, rowHeight - 80, 0);

    point(decayx, decayy);


    point(width / 3 - 250, rowHeight - 80); // Release endpoint

    strokeWeight(1);
    beginShape();
    vertex(0, rowHeight - 80); // Startpoint
    vertex(dx, 0); // Attack end
    vertex(decayx, decayy); // Decay end
    vertex(decayx + 100, decayy); // Sustain end
    vertex(width / 3 - 250, rowHeight - 80); // Endpoint
    endShape();


    pop();
  }
}
