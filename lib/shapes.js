// Circle class constructor
class Circle{
  // takes in one parameter which will be the color of the shape
  constructor(color){
    this.color = color;
  }

  //render() method returns string that determines the shape and color for an SVG file
  render(){
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
  }
}

// Triangle class constructor
class Triangle{
  // takes in one parameter which will be the color of the shape
  constructor(color){
    this.color = color;
  }

  //render() method returns string that determines the shape and color for an SVG file
  render(){
    return `<polygon points='150, 18 244, 182 56, 182' fill="${this.color}" />`
  }
}

class Square{
  // takes in one parameter which will be the color of the shape
  constructor(color){
    this.color = color;
  }

  //render() method returns string that determines the shape and color for an SVG file
  render(){
    return `<rect width='200' height='200' x='10' y='10' fill="${this.color}" />`
  }
}

// exporting Shapes classes
module.exports = {Circle, Triangle, Square};