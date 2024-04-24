const fs = require('fs');

function makeLogo(filename, content){
  fs.writeFile(filename, content, (err) => {err ? console.log(err) : console.log('SVG file created.')
});
}

module.exports = {makeLogo}