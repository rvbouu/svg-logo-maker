# SVG Logo Maker

## Description

This command-line application dynamically generates an SVG file, creating a logo with information gathered from the user using node.js and the inquirer package. Users are able to quickly and easily create a logo for their projects. This project is also tested using the jest package.

## User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Table of Contents

* [Description](#description)

* [User Story](#user-story)

* [Acceptance Criteria](#acceptance-criteria)

* [Installation](#installation)

* [Usage](#usage)

* [Tests](#tests)

* [Contributing](contributing)

* [Screenshot](#screenshot)

* [Questions](#questions)

## Installation

💾

`npm init`

`npm i inquirer@8.2.4`

`npm i -D jest`

## Usage

💻

Open the command-line at the root of your project, input `node index.js`, then answer the prompted questions.

## Tests

To run the test, run `npm run test`

## Contributing

* [Vanessa Bou](https://github.com/rvbouu)

## Screenshot

![gif of application functionality](./images/svg-logo-maker.gif)

The full video showing the application functionality can be found [here](https://drive.google.com/file/d/1lNAJy7A82fcU9YL1PcMkcyXlIbLN4aMA/view?usp=sharing).

## Questions

  [GitHub](https://github.com/rvbouu)

  For additional questions or concerns, please email me at rvbouu@gmail.com