

'use strict';

console.log('--- in execution phase ---');


/*
  environment: chrome

  name: SyntaxError
  message: Unexpected token '{'

  location: 27

  life cycle: execution

  the mistake: wrong syntax for if else statment

  the fix(es): change else to if
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}


