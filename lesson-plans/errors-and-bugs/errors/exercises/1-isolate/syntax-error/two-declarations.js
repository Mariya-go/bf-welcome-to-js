'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Identifier 'tree' has already been declared

  location: 22

  life cycle: execution

  the mistake: variable tree was declared twise

  the fix(es): remove let in 22
*/

let tree = 'oak';

tree = 'birch';
