const fs = require('fs')

const oldFilePath = './names/user.js'

const newFilePath = './names/ike_oyewole.js'

fs.rename(oldFilePath, newFilePath, (err) => {
  if (err) { console.error('Error renaming file:', err) }
 
  console.log('File renamed successfully.')
  
})
