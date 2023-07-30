const fs = require('fs')

const path = './Students'

fs.mkdir(path, (err) => {
  if (err) { console.error('Error: ', err) }
   
  console.log('Directory created successfully.')
  
})

