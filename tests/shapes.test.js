// importing class constructors from shapes.js
const shape = require('../lib/shapes');

// Testing suite for shapes package is created
describe('Test of Shapes Package', () => {
  // testing if circle.render does return `<circle cx="150" cy="100" r="80" fill="red" />` string with the color red in it
  it('should render a red circle', () => {
    const circle = new shape.Circle('red');

    expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="red" />`);
  })

  // testing if triangle.render does return `<polygon points='150, 18 244, 182 56, 182' fill="blue" />` string
  it('should render a blue triangle', () => {
    const triangle = new shape.Triangle('blue');

    expect(triangle.render()).toEqual(`<polygon points='150, 18 244, 182 56, 182' fill="blue" />`);
  })

  // testing to see if square.render does return `<rect width='200' height='200' x='10' y='10' fill="green" />`
  it('should render a green square', () => {
    const square = new shape.Square('green');

    expect(square.render()).toEqual(`<rect width='200' height='200' x='10' y='10' fill="green" />`);
  })
})