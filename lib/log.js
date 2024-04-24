const { writeFile } = require('fs/promises');

async function makeLog(filename, content){
  try {
    await fs.writeFileSync(filename, content)
    console.log('Generated logo.svg')
  } catch(err){
    throw new Error(err)
  }

  // fs.writeFile(filename, content, (err) => {
  //   if (err){
  //     throw new Error('Problem')
  //   }else{
  //     console.log('Generated logo.svg')
  //   }
    // {err ? throw new Error(err)) : console.log('Generated logo.svg')

}

module.exports = {makeLog}