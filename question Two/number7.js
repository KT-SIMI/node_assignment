const fs = require('fs')

const filePath = './names/ike_oyewole.js'

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err)  { console.error('Error reading file:', err) }
  
    console.log('File contents::::')
    console.log(data)
  
});
