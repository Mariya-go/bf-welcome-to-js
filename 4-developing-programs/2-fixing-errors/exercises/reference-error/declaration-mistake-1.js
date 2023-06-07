// #todo

'use strict';

/*
  environment: chrome

  name:ReferenceError
  message: __is not defined

  callstack: 
    at <anonymous>:20:6
    at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: execution

  the mistake: variable "welf" does not declared

  the fix(es): initialise and declare variable, using let or const
*/

const welf = 'ingrad';

console.log(welf);
