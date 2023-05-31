// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment: chrome

  name: SyntaxError
  message: 

  location: 32

  life cycle: creation

  the mistake: use + instead of =

  the fix(es): replase + to =
*/

whenFormDataChanges('user-data', () => {
  console.log('\n--- form data changed ---');

  // --- read user input ---

  let text = readString('to-double');

  // --- repeat the text ---

  let repeated = text + '\n' + text;

  // --- display the repeated text ---

  displayString('doubled-input', repeated);
});
