  
// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = (breed, callBack) => {
  //console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // ISSUE: Returning from inner callback function, not our main function.
    //console.log('Callback: I have the data!');
    if (!error) callBack(data);
    if (error) callBack(undefined);
  });
};

module.exports = breedDetailsFromFile;