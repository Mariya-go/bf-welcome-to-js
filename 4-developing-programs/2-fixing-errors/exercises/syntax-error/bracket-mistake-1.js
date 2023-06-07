// #todo

'use strict';


/*
  environment: chrome

  name: SyntaxError
  message: Unexpected end of input

    callstack: at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: creation

  the mistake: miss a curly brace in the end

  the fix(es): add curly brace
*/



for (let i = 0; i < 5; i++) {
  console.log(i);
}



