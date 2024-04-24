const {makeLog} = require('../lib/log');

describe('Test for Writing Files', () => {
  it('should write a file', () => {
    const result = makeLog('./examples/test-log.txt', 'This is a test file.')

    expect(result).toEqual(console.log('Generated logo.svg'))
  })
  
  it('should log an error', () => {
    const result = makeLog();

    expect(result).toEqual(console.log('Generated logo.svg'))
  })
})