// waitOneSecond expects a callback function
const waitOneSecond = (callback) => {
  // setTimeOut is invoked with a callback function which prints 
  // 'waited one second' after 1 sec
  setTimeout(() => {
    callback(null, 'waited one second');
  }, 1000)
}

module.exports = waitOneSecond;