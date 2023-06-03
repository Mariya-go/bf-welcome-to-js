import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let input = readString('to-mirror')

  // --- mirror the text ---
  let output = ' | '
  for (const char of input) {
    output = char + output + char
  }

  // --- display the result ---
  displayString('output', output)
});
