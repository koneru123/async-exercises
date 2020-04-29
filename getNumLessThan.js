// returns a random number
const generateRandomNum = (num) => {
  return (Math.random() * num);
}

// returns a 2second delay
const generateRandomDelay = () => {
  // return generateRandomNum(10) * 500;
  return 2000;
}

// callback(err, num)
const getNumLessThanTen = (callback) => {
  // randomDelay would be 2 second here
  const randomDelay = generateRandomDelay();
  
  setTimeout(() => {
    // randNum would be a random number between 1 - 10
    const randNum = generateRandomNum(10);
    // invokes the callback func with (null, randNum) after the randomDelay 
    //which in this case is 2 second delay
    callback(null, randNum);
  }, randomDelay);
};


// module.exports.getNumLessThanTen = getNumLessThanTen;
module.exports = getNumLessThanTen;

