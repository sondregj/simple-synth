function Waveform() {
  this.fft = new p5.FFT();
  this.waveform;

  this.update = function() {

  }

  this.render = function() {

    /*
    stroke(255, 50);
    strokeWeight(1);
    line(0, 100, width, 100); // Boundary lines
    line(0, 300, width, 300);
    */

    this.waveform = this.fft.waveform();
    noFill();
    strokeWeight(2);
    stroke(255, 210, 0);
    beginShape();
    for (var i = 0; i < this.waveform.length; i++) {
      var x = map(i, 0, this.waveform.length, 0, width);
      var y = map(this.waveform[i], -1, 1, 100, 300);
      vertex(x, y);
    }
    endShape();
  }
}
