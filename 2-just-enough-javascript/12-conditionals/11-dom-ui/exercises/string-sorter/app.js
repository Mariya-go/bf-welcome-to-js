import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('to-sort', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let inputA = readString('string-a');
  let inputB = readString('string-b');

  // --- sort them input by length ---
  let message = '';

  if (inputA.length > inputB.length) {
    message = inputB + ' , ' + inputA;
  }
  if (inputA.length < inputB.length) {
    message = inputA + ' , ' + inputB;
  } if (inputA.length === inputB.length) {
    message = inputA + ' \n ' + inputB;
  }

  // --- display the sorted strings ---
  displayString('sorted', message);
});
