// Written by Sondre Gjellestad
var appVersion = "0.1";

var canvas;
var osc = []; // Array for oscillators

var fft, wave, env, monospace, adsr;


function preload() {
  monospace = loadFont('assets/monospace.ttf');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, P2D);
  frameRate(30);
  textFont(monospace);

  //Initialize ADSR
  adsr = new ADSR();
  adsr.init();

  //Initialize FFT
  wave = new Waveform();

  // Initialize oscillators
  for (var i = 0; i < 3; i++) {
    osc[i] = new Osc();
    osc[i].init(i);
  }
}


function draw() {
  background(30, 200);

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

  // Update oscillators
  for (var i = 0; i < osc.length; i++) {
    osc[i].update();
  }

  // Update envelope
  adsr.update();

  // Render waveform
  stroke(255, 50);
  strokeWeight(1);
  //line(0, 100, width, 100); // Boundary lines
  //line(0, 300, width, 300);
  wave.render();


  // Render osc
  fill(40);
  noStroke();
  rect(0, height - 150, width, 150);
  stroke(70, 100);
  strokeWeight(1);
  line(width / 3, height - 150, width / 3, height);
  line(2 * width / 3, height - 150, width * 2 / 3, height);
  for (var i = 0; i < osc.length; i++) {
    osc[i].render();
  }

  // Render ADSR visualization
  //adsr.render();
}



function keyPressed() {
  keyHandler(keyCode, 1);
}

function keyReleased() {
  keyHandler(keyCode, 0);
}

function keyHandler(keyCode, pressed) {
  var key = keyCode;
  if (pressed) {
    if (key == 90 || key == 88) {
      console.log("Octave");
      if (key == 90) {
        if (octave > 0) {
          octave--;
        }
      } else {
        if (octave < 8) {
          octave++;
        }
      }
    } else if (keys[key][octave]) {
      var keyNumber = keys[key][octave];
      var f = calcFrequency(keyNumber);
      for (var i = 0; i < osc.length; i++) {
        osc[i].osc.freq(f, glide);
      }
      env.triggerAttack();
    }
  } else {
    if (keys[key][octave]) {
      var keyNumber = keys[key][octave];
      env.triggerRelease();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function calcFrequency(n) {
  var f = pow(2, (n - 49) / 12) * 440;
  return f;
}

90, 88
