// #todo

'use strict';


/*
  environment: chrome

  name: SyntaxError
  message: Unexpected token '}'

  callstack:
    at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: creation

  the mistake: extra closing curly bracket

  the fix(es): delete extra closing curly bracket
*/



for (let i = 0; i < 5; i++) { 
console.log(i);
}


