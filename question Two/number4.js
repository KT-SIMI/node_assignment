const fs = require('fs')
const path = require('path')


const directoryPath = './Names'

const content = 'console.log("My name is Oyewole Usman Ikeoluwakiitan")'

const filePath = path.join(directoryPath, 'user.js')

fs.appendFile(filePath, `\n${content}`, (err) => {
    if (err)  { console.error('Error appending text to the file:', err) }
    
    console.log('Text appended successfully.')

  })