// This script links keynumbers to keys on the keyboard.
// https://en.wikipedia.org/wiki/Piano_key_frequencies

var octave = 4;
var keys = [];

function setupKeymap() {

  //Map keyCodes to variables
  var c = 65; // A on laptop-keyboard
  var cs = 87; // W on laptop-keyboard
  var d = 83; // S on laptop-keyboard
  var ds = 69; // E on laptop-keyboard
  var e = 68; // D on laptop-keyboard
  var f = 70; // F on laptop-keyboard
  var fs = 84; // T on laptop-keyboard
  var g = 71; // G on laptop-keyboard
  var gs = 89; // Y on laptop-keyboard
  var a = 72; // H on laptop-keyboard
  var as = 85; // U on laptop-keyboard
  var b = 74; // J on laptop-keyboard


  /*

  The following part creates arrays for every key, combining keyCode
  and current octave.

  */


  //C note
  keys[c] = [
    (-8), //C0
    4, //C1
    16, //C2
    28, //C3
    40, //C4
    52, //C4
    64, //C4
    76, //C7
    88 //C8
  ];

  //C# note
  keys[cs] = [
    (-7),
    5,
    17,
    29,
    41, //C#4
    53,
    65,
    77,
    89
  ];

  //D note
  keys[d] = [
    0,
    0,
    0,
    0,
    42, //D4
    0,
    0,
    0
  ];

  //D# note
  keys[ds] = [
    0,
    0,
    0,
    0,
    43, //D#4
    0,
    0,
    0,
    0
  ];


  //E note
  keys[e] = [
    0,
    0,
    0,
    0,
    44,
    0,
    0,
    0,
    0
  ];

  //F note
  keys[f] = [
    0,
    0,
    0,
    0,
    45,
    0,
    0,
    0,
    0
  ];

  //F# note
  keys[fs] = [
    0,
    0,
    0,
    0,
    46,
    0,
    0,
    0,
    0
  ];

  //G note
  keys[g] = [
    0,
    0,
    0,
    0,
    47,
    0,
    0,
    0,
    0
  ];

  //G# note
  keys[gs] = [
    0,
    0,
    0,
    0,
    48,
    0,
    0,
    0,
    0
  ];

  //A note
  keys[a] = [
    0,
    0,
    0,
    0,
    49,
    0,
    0,
    0,
    0
  ];

  //A# note
  keys[as] = [
    0,
    0,
    0,
    0,
    50,
    0,
    0,
    0,
    0
  ];

  //B note
  keys[b] = [
    0,
    0,
    0,
    0,
    51,
    0,
    0,
    0,
    0
  ];
}

setupKeymap();
