import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let input = readString('to-reverse');

  // --- reverse this ---
  let reversed = '';
  for (const char of input) {
    reversed = char + reversed;
  }

  // --- display the result ---
  displayString('output', reversed);
});
