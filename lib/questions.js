// declaring dependencies and variables
const inquirer = require('inquirer');
const shapes = require('./shapes');

// array of questions for user to answer in terminal
const questions = () => inquirer.prompt([
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
  // once we get the inputs from the user, then we take them and place them in our SVG template
]).then(({text, textColor, shape, color, x, y}) => {
  // if the text value is more than 3 characters, an new error is thrown
  if(text.length > 3){
    throw new Error('Character limit exceeded. Please enter a three character logo.')
  }
  // switch statement checking the shape selected by the user and rendering the shape and setting the variables to the correct parameters for the shape
  switch(shape){
    case 'circle':
      shape = new shapes.Circle(color);
      x = '150';
      y = '125';
      break;
    case 'triangle':
      shape = new shapes.Triangle(color);
      x = '155';
      y = '160';
      break;
    case 'square':
      shape = new shapes.Square(color);
      x = '110';
      y = '125';
      break;
      // default case if an invalid shape is selected
    default:
      console.log('Invalid shape selection.')
  }
  
  // SVG template with all the input values placed in
  const result = `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${shape.render()}

  <text x="${x}" y="${y}" font-size="60" text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text>

</svg>
  `
  // returning the completed SVG template
  return result;
})

// exporting questions.js
module.exports = {questions}