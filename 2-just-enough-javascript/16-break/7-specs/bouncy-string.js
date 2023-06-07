// #todo

'use strict';

/* Challenge: write this program using at least 1 `break`

  a user can input string of letters to be converted into a bouncy string
    (a bouncy string is one with every other letter uppercase)
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input contains anything that is not a letter, they will be prompted again
    - given their input is valid, the loop will exit and their bouncy string will be displayed


  test cases:
    uppercase strings:
      'ABCDEF' -> 'aBcDeF'
      'JELLO' -> 'jElLo'
    lowercase strings:
      'abcdef' -> 'aBcDeF'
      'jello' -> 'jElLo'
    mixed strings:
      'AbCdEf' -> 'aBcDeF'
      'jElLo' -> jElLo'
*/

console.log('--- begin program ---');

/* --- gather user input --- */

let input;
while (!input) {
  input = prompt('enter some text to bouncy');
}

let special = '~!1@2#3$4%5^6&7*8(9)0_-+=}]{[|"?/>.<,:;';
let newInput;
let isSpecial = true;
while (isSpecial) {
  for (let char of input) {
    if (special.includes(char)) {
      alert('only letters alowed');
      newInput = prompt('enter some text to bouncy');
      input = newInput;
      isSpecial = true;
      break;
    } else {
      isSpecial = false;
      continue;
    }
  }
}

console.log('input:', input);

/* --- declare initial output --- */

let output = '';

/* --- create final output --- */
let isUpercase = true
for (let letter of input) {
  if (isUpercase) {
    output += letter.toLocaleLowerCase()
    isUpercase = false
  } else {
    output += letter.toLocaleUpperCase()
    isUpercase = true
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
