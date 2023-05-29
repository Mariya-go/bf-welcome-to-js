// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('______', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  let numberLeft = readNumber('left-num');
  let numberRight = readNumber('right-num');
  console.log(numberLeft, numberRight);

  // --- compare the numbers ---
  let result = numberLeft === numberRight;
  let message = '';
  if (result) {
    message = numberLeft + ' === ' + numberRight + '---> ' + result + '\n' + numberLeft + ' <= ' + numberRight + '---> ' + result + '\n' + numberLeft + ' >= ' + numberRight + '---> ' + result;
  } else {
    message = numberLeft + ' < ' + numberRight + '---> false' + '\n' + numberLeft + ' > ' + numberRight + '---> true';
  }

  // --- create a message

  // --- display the message ---
  displayString('compared', message);
});
