const fs = require('fs');

const directory = './names';

fs.rmdir(directory, (err) => {
  if (err) {
    console.error('Error deleting directory:', err);
  } else {
    console.log('Directory deleted successfully.');
  }
});
