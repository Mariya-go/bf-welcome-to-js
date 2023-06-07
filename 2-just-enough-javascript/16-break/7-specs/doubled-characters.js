// #todo

'use strict';

/* Challenge: write this program using at least 1 `break`

  a user can input string of letters (upper or lower case), each letter will be doubled
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input contains anything that is not a letter, they will be prompted again
    - given their input is valid, the loop will exit and the letters of their input will be doubled


  test cases:
    no doubled letters:
      'ABC' -> 'AABBCC'
      'abc' -> 'aabbcc'
      'AbC' -> 'AAbbCC'
    some doubled letters:
      'abbcc' -> 'aabbbbcccc'
      'jello' -> 'jjeelllloo'
*/

console.log('--- begin program ---');

/* --- gather user input --- */

let input;
while (!input) {
  input = prompt('enter some text');
}
console.log('input:', input);

// check if is not a letter

const character = '~`!1@2#3$4%5^6&7*8(9)0_-+=}]{[|":;?/>.<,';
let notACharacter = true;

while (notACharacter) {
  for (let char of input) {
    if (character.includes(char)) {
      alert('only letters alowed');
      input = prompt('enter only letters');
      notACharacter = true;
      break;
    } else {
      notACharacter = false;
      continue;
    }
  }
}
console.log(input);

/* --- declare initial output --- */

let output = '';

/* --- create final output --- */
let swich = true;
while(swich) {
for (let letter of input) {
if (input.indexOf(letter) < input.length) {
  output += letter + letter;
} else {
  break;
}
swich = false;
}
}


console.log('output:', output);

/* --- alert the result --- */

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
