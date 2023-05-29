'use strict';

/* Flip Five

  Data In:
  any text

  Data Out: 
  reverse text if text lenth is eaqual 5
  the same text if text lenth is not eaqual 5

  Test Cases:
  ' ' --> ' '
  'dfdg' --> 'dfdg'
  '12345' --> '54321'
  'dfghjk' --> 'dfghjk'

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter something with 5 characters and it will be reversed.');
  console.log(input);
}

/* --- check that the user input is 5 characters long --- */
let message = '';
if (input !== null && input.length === 5) {
  for (let character of input) {
    message = character + message;
  }
  console.log(message);
  } else {
  for (let character of input) {
    message = message + character;
  }
  console.log(message);
}

/* --- create the final message --- */

/* --- display the message --- */

alert(message);
