'use strict';

/* Bouncify

  A user can enter some text to bouncify it.
    - given a non-empty string
      every other letter is converted to UPPER CASE
      every other letter is converted to lower case
      all other characters are ignored without changing the pattern

  test cases:
    has only letters:
      'a'           -> 'A'
      'Hello'       -> 'HeLlO'
      'HELLO'       -> 'HeLlO'
      'cheese'      -> 'ChEeSe'
    has spaces and letters:
      'good bye'      -> 'GoOd ByE'
      ' row a boat '  -> ' RoW a BoAt '
    has everything:
      '12 Good Byes!'     -> '12 GoOd ByEs!'
      'h1! Hoe gaat het?' -> 'H1! hOe GaAt HeT?'
      '0 . x . 0'         -> '0 . X . 0'

*/
// get usr input
let input = null;
let message = '';
while (!input) {
  input = prompt('Please enter something');
  // if user canceled
  if (input === null) {
    message = prompt("Tere's no escape. Please enter something");
    continue;
  }
  // if empty string
  if (input === '') {
    message = prompt('No empty input, try again');
    continue;
  }
  // is string
  else {
    message = input;
    break;
  }
}

// loop throu message
// variable to store transformed string
let transformedMessage = '';

// variable to store index of character
let i = 0;
// variable for store special characters and spaces
const special = ' 1234567890?/.,!#$%^&*|';

// loop for processing the input
for (const char of message) {
  if (special.indexOf(char) === -1) {
    if (i % 2 === 0) {
      transformedMessage += char.toUpperCase();
    } else {
      transformedMessage += char.toLowerCase();
    }
  } else {
    transformedMessage += char;
  }

  i++;
}

// display transformed text
alert(transformedMessage);
