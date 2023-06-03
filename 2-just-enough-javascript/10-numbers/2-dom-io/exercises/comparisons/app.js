// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('nums', () => {
  // debugger;
  console.log('\n--- form data changed ---');

  // --- read user input ---
  let numberLeft = readNumber('left-num');
  let numberRight = readNumber('right-num');
  console.log(numberLeft, numberRight);

  let message = '';

  // --- compare the numbers ---
  if (
    (numberLeft ===
      numberRight || numberLeft >= numberRight || numberLeft <= numberRight)
  ) {
    // --- create a message
    message =
      numberLeft +
      ' > ' +
      numberRight +
      '---> ' +
      'false' +
      '\n' +
      numberLeft +
      ' >= ' +
      numberRight +
      '---> ' +
      'true' +
      '\n' +
      numberLeft +
      ' === ' +
      numberRight +
      '---> ' +
      'true' +
      '\n' +
      numberLeft +
      ' <= ' +
      numberRight +
      '---> ' +
      'true' +
      '\n' +
      numberLeft +
      ' < ' +
      numberRight +
      '---> ' +
      'false';
  }
  if (numberLeft > numberRight) {
    message =
      numberLeft +
      ' > ' +
      numberRight +
      '---> ' +
      'true' +
      '\n' +
      numberLeft +
      ' >= ' +
      numberRight +
      '---> ' +
      'true' +
      '\n' +
      numberLeft +
      ' === ' +
      numberRight +
      '---> ' +
      'false' +
      '\n' +
      numberLeft +
      ' <= ' +
      numberRight +
      '---> ' +
      'false' +
      '\n' +
      numberLeft +
      ' < ' +
      numberRight +
      '---> ' +
      'false';
  }

  if (numberLeft < numberRight) {
    message =
      numberLeft +
      ' > ' +
      numberRight +
      '---> ' +
      'false' +
      '\n' +
      numberLeft +
      ' >= ' +
      numberRight +
      '---> ' +
      'false' +
      '\n' +
      numberLeft +
      ' === ' +
      numberRight +
      '---> ' +
      'false' +
      '\n' +
      numberLeft +
      ' <= ' +
      numberRight +
      '---> ' +
      'true' +
      '\n' +
      numberLeft +
      ' < ' +
      numberRight +
      '---> ' +
      'true';
    
  }

  // --- display the message ---
  displayString('compared', message);
});
