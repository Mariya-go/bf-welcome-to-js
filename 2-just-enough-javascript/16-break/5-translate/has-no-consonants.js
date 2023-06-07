// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   get user input   --- */

let letters = null;

while (letters === null) {
  letters = prompt('enter some letters');
}

// :END WHILE

/* ---   check to consonants   --- */

let noConsonants = true;

for (const letter of letters) {
  let lowerCaseLetter = letter.toLowerCase();
  if ('bcdfghjklmnpqrstvwxyz'.includes(lowerCaseLetter)) {
    noConsonants = false;
    break;
  }
}

//   :END IF
// :END FOR-OF

/* ---   create message   --- */

let message = '';

if (noConsonants) {
  message = '"' + letters + '" has no consonants';
} else {
  message = '"' + letters + '" has at least one consonant';
}

// :END IF

/* ---   display message   --- */

alert(message);
