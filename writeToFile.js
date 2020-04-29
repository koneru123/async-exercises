// using node fs module
const fs = require('fs');

// writes to the filesystem(hard drive)
const writeToFile = (data, callback) => {
  // writes to the file system
  fs.writeFile('numFile.txt', data, 'utf8', (err) => {
    // using error first callback
    if (err) {
      // if error, then console logs the error
      console.log(err);
    } else {
      // if success, invokes the callback with text 'write to file!'
      callback('wrote to file!');
    }
  });
};

module.exports = writeToFile;

