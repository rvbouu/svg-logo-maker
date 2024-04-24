// declaring dependencies and variables
const fs = require('fs');

// function to write SVG file
function makeLog(filename, content){
  fs.writeFile(filename, content, (err) => {err ? console.log(err) : console.log('Generated logo.svg')
});
}

// exports log.js
module.exports = {makeLog}