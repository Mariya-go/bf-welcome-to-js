'use strict';

// declare variable a and initialise with value "Ewin" //
let a = 'Ewin';
// let a = 'Tugba';
// let a = 'Jo';
// let a = 'Olesandra';

// read variable a with value Ewin //
// declare variable b and initialise it with value "Hello Ewin, your name is " //
let b = 'Hello ' + a + ', your name is ';

// read variable a //
// compare lenth of value variable a with 4 //
// read variable b //
// execute condition //
// if lenth more than 4, than assign variable b value "b + long" //
// if lenth equal with 4, than assign variable b value "b + perfect" //
// if lenth less than 4, than assign variable b value "b + short" //
if (a.length > 4) {
  b = b + 'long.';
} else if (a.length === 4) {
  b = b + 'perfect.';
} else {
  b = b + 'short.';
}

// read variable b with value "Hello Ewin, your name is perfect"
console.log(b);
