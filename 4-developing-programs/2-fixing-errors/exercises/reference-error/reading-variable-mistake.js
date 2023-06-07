// #todo

'use strict';

/*
  environment: chrome

  name: ReferenceError
  message: Cannot access 'tomatoes' before initialization

  callstack:
    at <anonymous>:20:13
    at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: execution

  the mistake: variable was declared after reading

  the fix(es): declare variable before reading
*/

let tomatoes = 'fresh';
console.log(tomatoes);


