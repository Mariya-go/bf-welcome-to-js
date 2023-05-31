'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Invalid left-hand side in assignment

  location: 25

  life cycle: execution

  the mistake: value before variable

  the fix(es): change places of value and variable
*/

let isHappy = false;

isHappy = true;
