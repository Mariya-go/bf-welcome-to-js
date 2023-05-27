'use strict';

// Give "input" a default value before asking for the user input.
let input = 'default';
input = prompt('enter something with 5 characters:');

let message = '';

// Change input's value after asking for the user input so that we always show "thank you!".
if (input) {
  if (input.length < 5) {
    for (input; input.length < 5; input += 'a');
    message = 'thank you for ' + input;
  }
  if (input.length > 5) {
    input = input.slice(0, 5);
    message = 'thank you for ' + input;
  }
  if (input.length === 5) {
    message = 'thank you for ' + input;
  }
}
// Add one more conditional so that we never show ":(" and don't always show "thank you!".
else {
  message = prompt('enter something with 5 characters:');
}

alert(message);

/*  ===== Challenges =====
  - Give "input" a default value before asking for the user input.
  - Change input's value after asking for the user input so that we always show "thank you!".
  - Add one more conditional so that we never show ":(" and don't always show "thank you!".
*/
