const shape = require('../lib/shapes');

describe('Test of Shapes Package', () => {
  it('should render a red circle', () => {
    const circle = new shape.Circle('red');

    expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="red" />`);
  })

  it('should render a blue triangle', () => {
    const triangle = new shape.Triangle('blue');

    expect(triangle.render()).toEqual(`<polygon points='150, 18 244, 182 56, 182' fill="blue" />`);
  })

  it('should render a green square', () => {
    const square = new shape.Square('green');

    expect(square.render()).toEqual(`<rect width='200' height='200' x='10' y='10' fill="green" />`);
  })
})