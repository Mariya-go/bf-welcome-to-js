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
  let searchInput = readString('text');
  let toSearch = readString('query');
  let caseSensitiv = readBoolean('sensitive');

  // --- do the search ---

  let message = '';
  let searchInputLower = '';
  let toSearchLower = '';
  if (caseSensitiv === true) {
    if (searchInput.includes(toSearch)) {
      message = 'yes';
    } else {
      message = 'no';
    }
  } else {
    searchInputLower = searchInput.toLowerCase();
    toSearchLower = toSearch.toLowerCase();
    if (searchInputLower.includes(toSearchLower)) {
      message = 'yes';
    } else {
      message = 'no';
    }
  }

  // --- display the search results ---
  displayString('search-result', message);
});
