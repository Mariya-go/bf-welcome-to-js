import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let searchInput = readString('search-input');
  let toSearch = readString('query');
  let caseSensitiv = readBoolean('sensitive');

  // --- do the search ---
  

  if (searchInput.includes(toSearch)) {
    console.log('yes')
  } else {
    console.log('no')
  }

  

  // --- display the search results ---
});
