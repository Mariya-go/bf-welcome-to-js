// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   get user input   --- */

let text = null;

while (text === null) {
  text = prompt('enter some text');
}

// :END WHILE

/* ---   finding vowel   --- */

let hasAVowel = false;

for (const letter of text) {
  if ('aeiouAEIOU'.includes(letter)) {
    hasAVowel = true;
    break;
  }
}

//   :END IF
// :END FOR-OF

/* ---   create message   --- */

let message = ''

if (hasAVowel) {
message = '"' + text + '" has at least one vowel'
} else {
message = '"' + text + '" does not have any vowels'
}



// :END IF

/* ---   display message   --- */

alert(message)
