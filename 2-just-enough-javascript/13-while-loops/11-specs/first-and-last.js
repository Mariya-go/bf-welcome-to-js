// #todo

'use strict';

/*
  a user can provide input that starts with a capital letter and ends with a period
    - given the user cancels, they will be prompted again
    - given the input is shorter than two characters, they will be prompted again
    - given their input does not begin with a capital letter, they will be prompted again
    - given their input does not end with a period, they will be prompted again
    - given their input is valid, the first letter will be lower-cased and the period removed
    - given their input is valid, the loop will exit

  test cases:
    invalid input:
      (no test cases! the loop will not exit so there will be no output to test)
    two-character input:
      'A.' -> 'a'
      'X.' -> 'x'
    longer words:
      'Hello.' -> 'hello'
      'JavaScript!.' -> 'javaScript!'
    with some spaces:
      'Hello World.' -> 'hello World'
      'Hack your future.' -> 'hack your future'

*/

console.log('--- begin program ---');
// get user input

let input;
while (!input) {
  input = prompt(
    'Enter something starting uppercase, at least 2 character and with "." in the end',
  );
}

/* --- declare initial output --- */

let output = '';
let i = input.length;

// check and compear input
let firstChar = input[0].toUpperCase();

if (input[0] === firstChar && input[i - 1] === '.') {
  input = input.toLowerCase();
  output = input.substring(0, input.length - 1);
} else if (i < 2) {
  while (i !== 2) {
    input = prompt(
      'Enter something starting uppercase, at least 2 character and with "." in the end',
    );
  }
} else if (input[0] !== firstChar || input[i - 1] !== '.') {
  while (input[0] !== firstChar && input[i - 1] !== '.') {
    input = prompt(
      'Enter something starting uppercase, at least 2 character and with "." in the end',
    );
  }
}

/* --- create final output --- */

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');

/*
  checklist:
    [ ] the code is formatted
    [ ] linting check passes
    [ ] variable names are clear and helpful
    [ ] each line of code is explained in a comment above that line
      - use full sentences and correct JS vocabulary
    [ ] the program runs
    [ ] the program has no errors
    [ ] all of the test cases work
    [ ] you tested strange inputs that could break your program (edge cases)
*/
