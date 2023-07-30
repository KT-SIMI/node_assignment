const fs = require('fs')
const path = require('path')


const directoryPath = './Names'

const content = `const me = { name: 'Oyewole Usman Ikeoluwakiitan', age: 18, sex: 'male', nationality: 'Nigerian', phoneNumber: '+2348121762229', info: 'I am an udergraduate' }
console.log(me)`

const filePath = path.join(directoryPath, 'user.js')

fs.appendFile(filePath, `\n${content}`, (err) => {
    if (err)  { console.error('Error appending text to the file:', err) }
    
    console.log('Text appended successfully.')

  })