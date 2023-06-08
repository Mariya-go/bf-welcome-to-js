// #todo

'use strict';

/*
  modify the program so that short strings are not accepted
  if the user inputs a short string, they are prompted again
*/

alert(
  'enter many strings, they will be sorted by length. Short input is not allowed. \n\n' +
    'when you are done entering strings you can "cancel" or "escape"',
);

let shortStrings = 'short:';
let mediumStrings = 'medium:';
let longStrings = 'long:';

while (true) {
  const input = prompt('enter something more than 5 character');

  if (input === null) {
    break;
  }

  if (input.length < 5) {
    continue;
  } else if (input.length < 10) {
    mediumStrings = mediumStrings + '\n- "' + input + '"';
  } else {
    longStrings = longStrings + '\n- "' + input + '"';
  }
}

alert(mediumStrings + '\n\n' + longStrings);
