const inquirer = require('inquirer');
const shapes = require('./shapes');

const questions = (callback) => inquirer.createPromptModule([
  {
    type: 'input',
    message: 'Please enter a three character logo.',
    name: 'text'
  },
  {
    type: 'input',
    message: 'What color do you want the text to be? (Enter a color name or hexidecimal code)',
    name: 'textColor'
  },
  {
    type: 'list',
    message: 'What shape do you want your logo to be?',
    name: 'shape',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    message: 'What color do you want your logo to be? (Enter a color name or hexidecimal code)',
    name: 'color'
  }
]).then(({text, textColor, shape, color}) => {
  if(text.length > 3){
    throw new Error('Character limit exceeded. Please enter a three character logo.')
  }

  switch(shape){
    case 'circle':
      shape = shapes.Circle(color);
      break;
    case 'triangle':
      shape = shapes.Triangle(color);
      break;
    case 'square':
      shape = shapes.Square(color);
      break;
    default:
      console.log('Invalid shape selection.')
  }
  
  const result = `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${shape}

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text>

</svg>
  `
  callback(result);
})

module.exports = {questions}