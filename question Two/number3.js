const fs = require('fs')

const oldDirectoryName = './Students'

const newDirectoryName = './Names'

fs.rename(oldDirectoryName, newDirectoryName, (err) => {
  if (err) { console.error('Error renaming directory:', err) }
  
  console.log('Directory renamed successfully.')
  
})
