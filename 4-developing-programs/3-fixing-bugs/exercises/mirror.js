// #todo

'use strict';

/* mirror

  a user can enter text and have it reflected my a mirror
  - given the user cancels, they are prompted again
  - given the user inputs anything, their input is reflected

  test cases:
    '' -> '|'
    'a' -> 'a|a'
    'hello' -> 'olleh|hello'
    ':)' -> '):|:)'

  --- experiments ---

  1. FAILING:a
      EXPECT:a|a
      ACTUAL:|a|

    TRY:change the order of variables in line 40: mirrored = character + mirrored + character;
    PREDICT: we get correct output
    IT DID:we get correct output
    EXPLAIN: incorrect order gives incorrect output

  --- lessons learned ---
We have to be carefull with order of variables at the concatination

*/

let text = null;
while (text === null) {
  text = prompt('enter some text, it will be mirrored');
}

let mirrored = '|';
for (const character of text) {
  mirrored = character + mirrored + character;
}

alert(mirrored);
