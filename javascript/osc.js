var glide = 0;

function Osc() {
  this.wavetype;
  this.id;

  this.init = function(id) {
    this.id = id;
    this.wavetype = 'sine';
    this.osc = new p5.Oscillator();
    this.osc.amp(env);
    this.osc.start();
    this.osc.freq(0);
  }

  this.update = function() {
    this.osc.setType(this.wavetype);
  }

  this.render = function() {
    noStroke();
    textAlign(LEFT, TOP);
    textSize(30);
    fill(255);
    text("OSC" + (this.id + 1), (this.id) * width / 3 + 30, height - rowHeight + 20);

    textSize(15);
    fill(255, 150);
    text("wavetype " + this.wavetype, (this.id) * width / 3 + 30, height - rowHeight + 60);
  }
}
