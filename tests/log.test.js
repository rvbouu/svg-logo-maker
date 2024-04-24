const {makeLog} = require('../lib/log');

describe('Test for Writing Files', () => {
  it('should write a file', async () => {
    const result = await makeLog('./examples/test-log.txt', 'This is a test file.')

    expect(result).toEqual("ok")
  })
  
  it('should log an error', () => {
    const result = async () => await makeLog();

    expect(result).toThrow(err)
  })
})