// Written by Sondre Gjellestad
var appVersion = "0.1";

var canvas;
var osc = []; // Array for oscillators

var fft, wave, env, appfont, adsr, ui, rev, sFilter, amplitude;

var rowHeight = 200;


function preload() {
  appfont = loadFont('assets/monospace.ttf');
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, P2D);
  frameRate(30);
  textFont(appfont);

  // Initialize UI
  ui = new UI();

  // Initialize ADSR
  adsr = new ADSR();
  adsr.init();

  // Initialize FFT
  wave = new Waveform();

  // Initialize reverb
  rev = new Reverb();

  // Initialize filter
  sFilter = new Filter();

  // Initialize 3 oscillators
  for (var i = 0; i < 3; i++) {
    osc[i] = new Osc();
    osc[i].init(i);
  }

  // Initialize amplitude
  amplitude = new p5.Amplitude(0.5);
}

function draw() {
  background(30, 200);
  //amplitude.getLevel();

  // Render UI
  ui.render();

  // Render waveform
  wave.update();
  wave.render();

  // Update and render osc
  for (var i = 0; i < osc.length; i++) {
    osc[i].update();
    osc[i].render();
  }

  // Reverb
  rev.update();
  rev.render();

  // Update and render envelope and ADSR visualization
  adsr.update();
  adsr.render();
}

function keyPressed() {
  var key = keyCode;
  if (key == 90 || key == 88) {
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
}

function keyReleased() {
  var key = keyCode;
  if (keys[key]) {
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
