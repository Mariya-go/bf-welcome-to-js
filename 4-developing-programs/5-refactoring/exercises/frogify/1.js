// #todo

'use strict';

/*
  refactor this program so it does not use `break` or `continue`
*/

let toBeFrogged = null;

while (toBeFrogged === null) {
  toBeFrogged = prompt(
    'enter some text to frogify.\n' +
      '- "f" will be replaced with "frog"\n' +
      '- "F" will be replaced with "FROG"',
  );
}

let frogged = '';

for (let character of toBeFrogged) {
  if (character === 'f') {
    frogged = frogged + 'frog';
    character = '';
  }
  if (character === 'F') {
    frogged = frogged + 'FROG';
    character = '';
  }
  frogged = frogged + character;
}

alert(frogged);
