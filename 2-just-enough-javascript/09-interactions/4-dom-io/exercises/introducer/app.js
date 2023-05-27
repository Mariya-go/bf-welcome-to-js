// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  let firstName = readString('fn');
  let lastName = readString('ln');
  let name = firstName + ' ' + lastName;
  console.log(name);

  // --- create a message ---
  let greeting = 'Hello, my name is ' + name;

  // --- display the message ---
  displayString('greet-field', greeting);
});
