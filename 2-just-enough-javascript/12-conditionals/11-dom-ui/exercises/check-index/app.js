import {
  whenFormDataChanges,
  readString,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let text = readString('text');
  let character = readString('character');
  let i = readNumber('i');

  // --- check the index ---
  let searchResult = '';
  if (!character) {
    searchResult = "oops! you don't put any char";
    
  }
  if (text[i] === character) {
    searchResult = 'yes';
  }
  if (text[i] !== character && character !== '') {
    searchResult = 'no';
  }

  // --- display the search results ---
  displayString('search-result', searchResult);
});
