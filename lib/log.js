const fs = require('fs');

function makeLog(filename, content){
  fs.writeFile(filename, content, (err) => {err ? console.log(err) : console.log('Generated logo.svg')
});
}

module.exports = {makeLog}