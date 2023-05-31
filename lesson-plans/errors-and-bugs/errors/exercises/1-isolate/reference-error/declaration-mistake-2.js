'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: ReferenceError
  message: Cannot access 'isValidUserName' before initialization

  location: 24 

  life cycle: execution

  the mistake: use if statment before variable inside was declared

  the fix(es): declare variable before if statment
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);
let isValidUserName;
if (userName.length > 3) {
  isValidUserName = true;
}



if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
