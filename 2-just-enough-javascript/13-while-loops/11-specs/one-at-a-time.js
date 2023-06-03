// #todo

'use strict';

/*
  a user can add single characters to a string until they confirm they have finished
    - given they cancel, they see a helpful message and are prompted again
    - given the input is empty, they see a helpful message and are prompted again
    - given the input is longer than 1 character, they see a helpful message and are prompted again
    - given the input is a single character, the input is appended to the output
    - given the user confirms the output is complete, the loop will end and the output is displayed

  no test cases!
    this program cannot be tested by input/output pairs
    because the user can decide when to stop there are no certain test cases

*/

console.log('--- be gin program ---');
let input = prompt('add single character to get output');
while (!input || input.length > 1) {
  if (input === null) {
    input = prompt('cansel not allowed, add single character to get output');
  } else if (input === '') {
    input = prompt(
      'you need to put character, add single character to get output',
    );
  } else if (input.length > 1) {
    input = prompt('you need to put only one character');
  }
}

/* --- declare initial output --- */

let output = input;
let char;

/* --- create final output --- */

let final = false;

while (!final) {
  final = confirm('is your output finished?');
  if (final === false) {
    char = prompt('your output is "' + output + '". enter next character');
    output += char;
    console.log(output);
  } else {
    alert(output);
  }
}

/* --- alert the result --- */

console.log('output:', output);


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
