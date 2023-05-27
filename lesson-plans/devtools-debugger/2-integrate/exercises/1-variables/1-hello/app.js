// these are the only functions you will need
import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-info', () => {
  debugger;

  console.log('\n--- form data changed ---');

  // --- read user input ---

  let firstName = readString('firstName');
  let lastName = readString('lastName');

  console.log(firstName, lastName);

  // --- create a message ---

  let helo = 'Hello ' + firstName + ' ' + lastName + '!';
  let goodBye = 'Good bye ' + firstName + ' ' + lastName + '!';
  let greeting = helo + '\n' + goodBye;

  // --- display the message ---

  displayString('greeting-output', greeting);
});

/*  ===== Challenges =====

  - Modify the program so it uses a first AND a last name
  - Make the program say "hello", then "good bye" on a new line

*/
