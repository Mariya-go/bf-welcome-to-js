import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('calculator', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read user values ---
  let number1 = readNumber('left');
  let number2 = readNumber('right');

  // --- multiply the numbers --
  let mult = number1 * number2;

  // --- create a message ---
  let outputMassage = number1 + ' * ' + number2 + ' === ' + mult;

  // --- display the message ---
  displayString('product', outputMassage);
});
