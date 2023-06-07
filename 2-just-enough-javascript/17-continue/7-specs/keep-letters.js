// #todo

'use strict';

/* Challenge: write this program using `break` and `continue`

  a user can input a non-empty string and all characters which are not letters will be removed
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input is valid, the loop will exit and the extra characters will be removed

  test cases:
    only letters:
      'JavaScript' -> 'JavaScript'
      'abc' -> 'abc'
      'heLLO' -> 'heLLO'
    only not-letters:
      '.(-).' -> ''
      '-=>|<=-' -> ''
      '. - ^ - .' -> ''
    mixed letters and not-letters:
      'hello world!' -> 'helloworld'
      'let input = ""' -> 'letinput'
*/

console.log('--- begin program ---');

/* --- gather user input --- */

let input;
while (true) {
  input = prompt(
    'Please tape something, all characters which are not letters will be removed',
  );
  if (input === null) {
    alert('You canceled. Please try again.');
    continue;
  }
  if (input === '') {
    alert('Input is empty. Please enter a non-empty string.');
    continue;
  } else {
    break;
  }
}
console.log('input:', input);

/* --- declare characters to keep --- */

let toKeep = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';

/* --- declare initial output --- */

let output = '';

/* --- create final output --- */

for (let char of input) {
  if (toKeep.includes(char)) {
    output += char;
  }
}


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
