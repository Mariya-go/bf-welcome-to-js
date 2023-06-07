// #todo

'use strict';

/* Challenge: write this program using at least 1 `break`

  a user can provide input that contains only uppercase and lowercase letters
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input contains anything that is not a letter, they will be prompted again
    - given their input is valid, the loop will exit and their input is alerted

  test cases:
    invalid input:
      (no test cases! the loop will not exit so there will be no output to test)
    input with only letters:
      'abcdABCD' -> 'abcdABCD'
      'JAVAscript' -> 'JAVAscript'
      'hi' -> 'hi'

*/

console.log('--- begin program ---');

/* --- declare initial output --- */

let output = '';
let input;
let notACharacter = true;
while (true) {
  input = prompt(
    'Please tape some letters, all characters which are not letters not alowed',
  );
  if (input === null) {
    alert('You canceled. Please try again.');
    continue;
  }
  if (input === '') {
    alert('Input is empty. Please enter a non-empty string.');
    continue;
  } else {
    /* --- create final output --- */
    const character = '~`!1@2#3$4%5^6&7*8(9)0_-+=}]{[|":;?/>.<,';

    while (notACharacter) {
      for (let char of input) {
        if (character.includes(char)) {
          alert('only letters alowed');
          input = prompt('enter only letters');
          output = '';
          notACharacter = true;
          break;
        } else {
          output += char;
          notACharacter = false;
          continue;
        }
      }
    }
  }
  break;
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
