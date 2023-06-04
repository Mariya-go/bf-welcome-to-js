import {
  whenFormDataChanges,
  readString,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('skippable', () => {
  debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let toSkip = readString('phrase');
  let skipNumber = readNumber('skip-size');

  // --- skip characters ---
  let output = '';
  let i = 0;
  for (const char of toSkip) {
    if (toSkip.indexOf(char) % skipNumber !== 0) {
      output += char;
    }
  }

  // --- display the result ---
  displayString('skipped', output);
});
