function Waveform() {
  this.fft = new p5.FFT();

  this.render = function() {
    var waveform = this.fft.waveform();
    noFill();
    beginShape();
    stroke(255, 210, 0);
    strokeWeight(2);
    for (var i = 0; i < waveform.length; i++) {
      var x = map(i, 0, waveform.length, 0, width);
      var y = map(waveform[i], -1, 1, 100, 300);
      vertex(x, y);
    }
    endShape();
  }
}
