var version = "1.0";

var osc = [];

var fft, wave, env;

var glide = 0;

var attackLevel = 0.5;
var releaseLevel = 0;

var attackTime = 0.001;
var decayTime = 0.3;
var susPercent = 0.4;
var releaseTime = 0.5;

//fill(255,210,0);

var monospace;


function preload() {
  monospace = loadFont('assets/monospace.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  frameRate(30);
  textFont(monospace);


  //Initialize ADSR
  env = new p5.Env();
  env.setADSR(attackTime, decayTime, susPercent, releaseTime);
  env.setRange(attackLevel, releaseLevel);


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
  text("v" + version, 300, 30);


  // Display settings
  noStroke();
  fill(255, 150);
  textSize(20);

  text("glide " + (glide * 1000) + "ms", 30, 330);
  text("freq " + round(osc[0].osc.f) + "hz", 30, 330 + 1 * 30);
  text("tone " + glide + "ms", 30, 330 + 2 * 30);
  text("glide " + glide + "ms", 30, 330 + 3 * 30);


  // Update oscillators
  for (var i = 0; i < osc.length; i++) {
    osc[i].update();
  }


  // Render waveform
  stroke(255, 50);
  strokeWeight(1);
  line(0, 100, width, 100);
  line(0, 300, width, 300);
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
}

function keyPressed() {
  keyHandler(keyCode, 1);
}

function keyReleased() {
  keyHandler(keyCode, 0);
}

function keyHandler(keyCode, pressed) {
  if (pressed) {
    var keyNumber = keys[octave][keyCode];
    if (keyNumber) {
      var f = calcFrequency(keyNumber);
      for (var i = 0; i < osc.length; i++) {
        osc[i].osc.freq(f, glide);
      }
      env.triggerAttack();
    }
  } else {
    var keyNumber = keys[octave][keyCode];
    if (keyNumber) {
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
