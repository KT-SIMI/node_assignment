const fs = require('fs')
const path = require('path')


const directoryPath = './Students';

const content = 'console.log("This is the user.js file")'

const filePath = path.join(directoryPath, 'user.js')

fs.writeFile(filePath, content, (err) => {
  if (err) { console.error('Error creating file:', err) }
  
    console.log('File created successfully.')
 
})
