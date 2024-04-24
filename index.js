const {makeLog} = require('./lib/log');
const {questions} = require('./lib/questions')

function init(){
  questions().then((content) => makeLog('./examples/logo.svg', content));
}

init();