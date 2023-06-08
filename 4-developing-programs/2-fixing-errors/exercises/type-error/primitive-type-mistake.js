

'use strict';

/*
  environment:chrome

  name:TypeError
  message:Cannot read properties of null (reading 'length')

  callstack:at <anonymous>:22:23
    at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle:executing

  the mistake: it's not possible to read length of null

  the fix(es): change the type of variable value
*/

const userInput = 'null';

console.log(userInput.length);
