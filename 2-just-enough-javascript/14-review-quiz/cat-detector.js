'use strict';

/* Cat Detector

  This programs prompts the user to input a cat,
  and lets them know if they did input a cat or not.

  Data In:
    any text

  Data Out:
    alert 

  Test Cases:
    'sddf' --> alert: "sddf" is not a cat
    '' --> "" alert: is not a cat
    'cat' --> alert 'thank you for the cat'
 

  PS. try the "ask me" button!
*/

/* --- get user input --- */

let input = null;
while (input === null) {
  input = prompt('please enter "cat"');
}

/* --- create message --- */

let message = '';
if (input !== 'cat') {
  message = '"' + input + '" is not a cat';
} else {
  message = 'thank you for the cat';
}

/* --- alert message --- */

alert(message);
