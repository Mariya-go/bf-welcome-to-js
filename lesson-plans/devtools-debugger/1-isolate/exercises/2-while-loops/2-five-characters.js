'use strict';

let input = null;
let input1;
let input2;
while (input === null || input.length !== 10) {
  input1 = prompt('enter something with 10 characters in 2 steps:');
  input2 = prompt('enter something with 10 characters in 2 steps:');
  input = input1 + input2;
}

let message = 'thank you for "' + input + '"!';

alert(message);

/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/
