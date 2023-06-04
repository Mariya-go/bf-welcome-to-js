import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-field', () => {
  debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let phrase = readString('phrase');
  let charToRemove = readString('character');
  let defoltPhrase = 'you can only skip one character at a time';

  // --- remove the character if there is only one ---
  let output = '';
  for (let char of phrase) {
    if (charToRemove === '' && phrase !== '') {
      output = defoltPhrase;
    }
    if (charToRemove !== char) {
      output += char;
    }
  }

  // --- display the result ---
  displayString('filtered', output);
});
