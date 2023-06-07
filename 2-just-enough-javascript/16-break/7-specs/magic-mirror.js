// #todo

'use strict';

/* Challenge: write this program using at least 1 `break`

  a user can input a non-empty string and only the letters will be turned into a mirror
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input is valid, the loop will exit and the mirrored letters will be displayed

  test cases:
    only letters:
      'abc' -> 'abc|cba'
      'hello' -> 'hello|olleh'
      'JavaScript' -> 'JavaScript|tpircSavaJ'
    only not-letters:
      '.(-).' -> '|'
      '-=>|<=-' -> '|'
      '. - ^ - .' -> '|'
    mixed letters and not-letters:
      'hello!' -> 'hello|olleh'
      'good bye?' -> 'goodbye|eybdoog'
      'let input = ""' -> 'letinput|tupnitel'

*/

console.log('--- begin program ---');

/* --- gather user input --- */

let input;
while (true) {
  input = prompt(
    'Please tape something, only letters will be mirrored',
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

/* --- declare initial output --- */

let output = ' | ';

/* --- create final output --- */
let toRemove = '~`!1@2#3$4%5^6&7*8(9)0_-+=}]{[|\"?/>.<,:;';

for (let char of input) {
  if(toRemove.includes(char)) {
    continue
  } else {
    output = char + output + char
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
