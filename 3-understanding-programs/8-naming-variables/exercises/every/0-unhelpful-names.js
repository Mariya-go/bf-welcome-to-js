// #todo

'use strict';

/*
  _a: get user input
    declaration: yes
      init: yes
      types: boolean
      scopes: global
    reads: 3
      scopes: global
      checks: while, for of
    assignments: 1
      types: string
      scopes: global


*/

let _a = null;
while (!_a) {
  _a = prompt('enter some text, the program will check if it is only vowels');
}

let _b = 'aeiou';

let _c = true;
for (let _d of _a) {
  let _e = _b.includes(_d.toLowerCase());
  if (!_e) {
    _c = false;
    break;
  }
}

alert(_c);
