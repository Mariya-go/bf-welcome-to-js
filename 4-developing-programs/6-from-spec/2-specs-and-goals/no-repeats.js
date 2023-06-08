// #todo

'use strict';

/* No Repeats

  A user can input some text and learn if it has any repeated characters.
    - given the user cancels:
        they are prompted again
    - given their input has at least one repeated character:
        they are told so
    - given their input has at no repeated characters:
        they are told so

  test cases:
    contains no repeated characters:
      ' '           ->   '" " has no repeats'
      'abc'         ->   '"abc" has no repeats'
      'market'      ->   '"market" has no repeats'
      'toad'        ->   '"toad" has no repeats'
    contains 1 repeated character:
      '  '          ->  '"  " has at least one repeat'
      'aa'          ->  '"aa" has at least one repeat'
      'aba'         ->  '"aba" has at least one repeat'
      'abac'        ->  '"abac" has at least one repeat'
      'JavaScript'  ->  '"JavaScript" has at least one repeat'
    contains more than 1 repeated characters:
      '   '         ->  '"   " has at least one repeat'
      'abacada'     ->  '"abacada" has at least one repeat'
      'abcdefggg'   ->  '"abcdefggg" has at least one repeat'
      '.@@..@@.'    ->  '".@@..@@." has at least one repeat'

*/

/* --- gather user input --- */
let input = null;
while(input === null) {
  input = prompt('enter some text, we check if it has repeated character')
}

/* --- check if the input has any repeated characters --- */

//  store the search results as a boolean

let hasNoRepeated = true;


let noRepetition = '';
  let previousChar = '';
let nextChar = '';
for (const char of input) {
  nextChar = char
  if (previousChar === nextChar) {
    hasNoRepeated = false;
    break;
  }
noRepetition = previousChar + char;
    previousChar = char;
}
    
  


/* --- create a message for the user --- */
let message = '';
if(hasNoRepeated) {
  message = '"' + input + '" has no repeats'
} else {
  message = '"' + input + '" has at least one repeat'
}

/* --- display the message to the user --- */
alert(message);