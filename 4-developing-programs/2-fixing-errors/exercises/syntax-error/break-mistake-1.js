// #todo

'use strict';

/*
  environment: chrome

  name: SyntaxError
  message: Illegal break statement

  callstack: at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: execution

  the mistake: break using for if statement, not for loop

  the fix(es): delete break
*/

const userName = 'wingdoz';

if (userName.length > 3) {
  console.log(userName);
  
}


