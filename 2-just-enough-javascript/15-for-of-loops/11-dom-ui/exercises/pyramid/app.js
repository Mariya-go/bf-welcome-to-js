import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let input = readString('pyramid-bricks');

  // --- build a pyramid ---
  let pyramide = '';
  let line = ''

  for (let char of input) {
    line += char
    pyramide += '\n' + line;
      
  }

  // --- display the pyramid ---
  displayString('out', pyramide);
});
