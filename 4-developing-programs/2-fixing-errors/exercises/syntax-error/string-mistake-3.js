// #todo

'use strict';

/*
  environment:chrome

  name:SyntaxError
  message:Unexpected string

  callstack:at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle:creation

  the mistake:use single quotes twise in one string

  the fix(es):use double quotes with single quotes in one string
*/

const quotesInQuotes = 'remind yourself "i can do this!" at least once a day';


