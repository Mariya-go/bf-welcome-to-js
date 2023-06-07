// #todo

'use strict';

/*
  environment:chrome

  name:SyntaxError
  message:Unexpected strict mode reserved word

  callstack:at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: creation

  the mistake: use incorrect syntax for if statment. Use if instead of for.

  the fix(es): replace if with for
*/

for (let i = 0; i < 5; i++) {
  console.log(i);
}


