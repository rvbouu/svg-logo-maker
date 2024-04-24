// declaring dependencies and variables
const {makeLog} = require('./lib/log');
const {questions} = require('./lib/questions')

// function to initialize program
function init(){
  // calls questions function to prompt the user for input then passes the values to makeLog function
  // makeLog function saves generated SVG file to examples folder
  questions().then((content) => makeLog('./examples/logo.svg', content));
}

// calls init() function to run the program
init();