// #todo

'use strict';

/*


  Data In:

  Data Out:

  Test Cases:

*/

/* ---   get user input   --- */

let input = null;

while (true) {
  input = prompt(
    'enter something with at least one space, the spaces will be removed',
  );

  if (input === null) {
    alert('no escape');
  } else if (input === '') {
    alert('gotta enter something');
  } else if (!input.includes(' ')) {
    alert('there must be a space!');
  } else {
    break;
  }
}
//   :END IF
// :END WHILE

/* ---   remove space   --- */

let spaceless = '';

for (const char of input) {
  if (char !== ' ') {
    spaceless += char;
  }
}

//   :END IF
// :END FOR-OF

/* ---   display input   --- */

alert(input + ' -> ' + spaceless);
