// #todo

'use strict';

/* longer than 4

  a user can exit the loop by canceling or entering something longer than 4 characters
  - given the user cancels, the program tells them they canceled
  - given the user input is shorter than or equal to  4 characters, the loop continues
  - given the user input is longer than 4 characters, the loop exits

  test cases:
    null -> 'you canceled'
    'abcde' -> 'abcde'
    'javascript' -> 'javascript'
    'you canceled' -> 'you canceled'

  --- experiments ---

  1. FAILING:cancel
      EXPECT:'you canceled'
      ACTUAL:''

    TRY: delete initiation of variable input inside the scope while (delete let before variable input)
    PREDICT:we get expected output for cancel
    IT DID: we get expected output for cancel, but still incirrect output for string
    EXPLAIN: variable input stay global

  2. FAILING:abcde
      EXPECT:'abcde'
      ACTUAL:stay inside loop

    TRY: in line 53 change input to input.length for comparing input length
    PREDICT:we get expected output for abcde
    IT DID: we get expected output for abcde and over string longer than 4 characters
    EXPLAIN: it was incorrect comparing, we need compare input length

  --- lessons learned ---

  We need to be careful with variables inside a scope. We need to compare right type of values.


*/

let input = '';

let prompting = true;
while (prompting) {
  input = prompt(
    'enter something longer than 4 characters, or "cancel" to leave',
  );
  if (input === null) {
    prompting = false;
    input = 'you canceled';
  } else if (input.length > 4) {
    prompting = false;
  }
}

alert(input);
