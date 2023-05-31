'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Invalid or unexpected token

  location: 23, 24

  life cycle: execution

  the mistake: devide string on 2 lines

  the fix(es): make it 1 line
*/

const a = 'this is two lines';

