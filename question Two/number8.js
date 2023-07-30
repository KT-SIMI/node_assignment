const fs = require('fs')

const filePath = './names/ike_oyewole.js'

fs.unlink(filePath, (err) => {
  if (err) { console.error('Error deleting file:', err) }

 console.log('File deleted successfully.')
 
})
