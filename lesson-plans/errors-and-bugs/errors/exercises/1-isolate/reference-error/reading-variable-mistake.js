'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: ReferenceError
  message: Cannot access 'tomatoes' before initialization

  location: 20

  life cycle: execution

  the mistake: loging variable tomatoes before declaring

  the fix(es): declare variable first
*/
let tomatoes = 'fresh';
console.log(tomatoes);


