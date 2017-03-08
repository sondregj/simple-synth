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
    (-6),
    6,
    18,
    30,
    42, //D4
    54,
    66,
    78,
    90
  ];

  //D# note
  keys[ds] = [
    (-5),
    7,
    19,
    31,
    43, //D#4
    55,
    67,
    79,
    91
  ];


  //E note
  keys[e] = [
    (-4),
    8,
    20,
    32,
    44,
    56,
    68,
    80,
    92
  ];

  //F note
  keys[f] = [
    (-3),
    9,
    21,
    33,
    45,
    57,
    69,
    81,
    93
  ];

  //F# note
  keys[fs] = [
    (-2),
    10,
    22,
    34,
    46,
    58,
    70,
    82,
    94
  ];

  //G note
  keys[g] = [
    (-1),
    11,
    23,
    35,
    47,
    59,
    71,
    83,
    95
  ];

  //G# note
  keys[gs] = [
    0,
    12,
    24,
    36,
    48,
    60,
    72,
    84,
    96
  ];

  //A note
  keys[a] = [
    1,
    13,
    25,
    37,
    49,
    61,
    73,
    85,
    97
  ];

  //A# note
  keys[as] = [
    2,
    14,
    26,
    38,
    50,
    62,
    74,
    86,
    98
  ];

  //B note
  keys[b] = [
    3,
    15,
    27,
    39,
    51,
    63,
    75,
    87,
    99
  ];
}

setupKeymap();
