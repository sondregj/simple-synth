function UI() {

  this.render = function() {
    // Header
    textAlign(LEFT, TOP);
    noStroke();

    textSize(40);
    fill(255);
    text("SYNTH.IO", 30, 30);

    textSize(40);
    fill(255, 150);
    text("v" + appVersion, 300, 30);

    // Show settings
    noStroke();
    fill(255, 150);
    textSize(20);

    text("glide " + (glide * 1000) + "ms", 30, 330);
    text("freq " + round(osc[0].osc.f) + "hz", 30, 330 + 1 * 30);
    text("tone " + glide + "ms", 30, 330 + 2 * 30);
    text("glide " + glide + "ms", 30, 330 + 3 * 30);
    text("octave " + octave, 30, 330 + 4 * 30);
    text("attack " + adsr.attackTime * 1000 + "ms", 30, 330 + 5 * 30);
    text("decay " + adsr.decayTime * 1000 + "ms", 30, 330 + 6 * 30);
    text("sustain " + adsr.susPercent * 100 + "%", 30, 330 + 7 * 30);
    text("release " + adsr.releaseTime * 1000 + "ms", 30, 330 + 8 * 30);



    // Oscillator section
    fill(40);
    noStroke();
    rect(0, height - rowHeight, width, rowHeight);
    stroke(70, 100);
    strokeWeight(1);
    line(width / 3, height - rowHeight, width / 3, height);
    line(2 * width / 3, height - rowHeight, width * 2 / 3, height);


    // ADSR and filter section
    fill(10);
    noStroke();
    rect(width * 2 / 3, height - rowHeight * 2, width / 3, rowHeight);



  }
}
