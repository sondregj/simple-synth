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

    // Display amplitude

    // Show settings
    noStroke();
    fill(255, 150);
    textSize(20);

    text("glide " + (glide * 1000) + "ms", 30, 330);
    text("freq " + round(osc[0].osc.f) + "hz", 30, 330 + 1 * 30);
    text("tone " + glide + "ms", 30, 330 + 2 * 30);
    text("glide " + glide + "ms", 30, 330 + 3 * 30);
    text("octave " + octave, 30, 330 + 4 * 30);


    // Oscillator, ADSR and filter section
    fill(40);
    noStroke();
    rect(0, height - rowHeight * 2, width, rowHeight * 2);

    // Line separating rows
    stroke(70, 100);
    strokeWeight(5);
    line(0, height - rowHeight, width, height - rowHeight); // Line separating the rows

    // Line separating columns
    stroke(70, 100);
    strokeWeight(5);
    line(width / 3, height - rowHeight * 2, width / 3, height);
    line(2 * width / 3, height - rowHeight * 2, width * 2 / 3, height);
  }
}
