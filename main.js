const getNumLessThanTen = require('./getNumLessThan.js'); 
const waitOneSecond = require('./waitOneSecond');
const writeToFile = require('./writeToFile');


// getNumLessThanTen((error, success) => {
//   if (error) {
//     console.log('that shouldnot be right');
//   } else {
//     console.log(success);
//   }
// });

// getNumLessThanTen((error, success) => {
//   if (error) {
//     console.log('that shouldnot be right');
//   } else {
//     waitOneSecond((error, success) => {
//       if (error) {
//         console.log('oh no');
//       } else {
//         console.log(success);
//       }
//     });
//   }
// });

// waitOneSecond((error, success)=>{
//   if (error) {
//     console.log('what went wrong? 1')
//   } else {   
//     console.log(success)
//     waitOneSecond((error, success)=> {
//       if (error) {
//         console.log('what went wrong? 2')
//       } else {
//         console.log(success);
//         waitOneSecond((error, success) => {
//           if (error) {
//             console.log('uh oh you are on the inside');
//           } else {
//             console.log(success);
//             getNumLessThanTen((error, success) => {
//               if (error) {
//                 console.log('something is going on');
//               } else {
//                 console.log('here is the random number ', success);
//                 writeToFile(success, (suc) => {
//                   if (suc) {
//                     console.log(suc);
//                   }
//                 })
//               }
//             })
//           }
//         })
//     }
//     })
//   }
// });

waitOneSecond((error, success) => {
  if (error) {
    console.log('ruh-roh');
  } else {
    console.log(success);
    waitOneSecond((error, success) => {
      if (error) {
        console.log('uh-oh');
      } else {
        console.log(success);
        waitOneSecond((error, success) => {
          if (error) {
            console.log(error)
          } else {
            console.log(success);
            console.log('getting number now')
            getNumLessThanTen((error, success) => {
              if (error) {
                console.log(error);
              } else {
                console.log('number received! it is ' + success);
                writeToFile(success, (suc, err) => {
                  if (err) {
                    console.log('so close!');
                  } else {
                    console.log(suc);
                  }
                })
              }
            })
          }
        })
      }
    })
  }
})

/*
get a random number less than 10,
wait three seconds
write the number to the hard drive
Then, once all that is done, console log "I'm done!"

CONSTRAINTS
- No using setTimeout (must use waitOneSecond)
- No editing any file except main.js
*/



