// #todo

'use strict';

/*
  environment: chrome

  name: ReferenceError
  message:  isValidUserName is not defined

  callstack: 
   at <anonymous>:29:57
    at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: execution

  the mistake: variable isValidUserName declared inside a scope. This variable was declared twise using const.

  the fix(es): declare variable isValidUserName onse outside a scope usin let.
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);
let isValidUserName;

if (userName.length > 4) {
  isValidUserName = true;
} else {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);
