// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('nametag', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  let firstName = readString('first'); 
  let lastName = readString('last'); 
  let name = firstName + ' ' + lastName;
  console.log(name);

  // --- create a greeting ---
  let greeting = 'Hello ' + name + '!';

  

  // --- display the greeting ---
  displayString('greeting', greeting);
});
