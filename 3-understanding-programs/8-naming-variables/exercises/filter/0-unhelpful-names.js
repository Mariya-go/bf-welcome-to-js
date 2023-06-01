// #todo

'use strict';

/*
  _a: get user input
    declaration: yes
      init: yes
      types: boolean
      scopes: global
    reads: 3
      scopes:global
      checks: while, for of
    assignments: 1
      types: string
      scopes:global


*/

let _a = null;
while (_a === null) {
  _a = prompt('enter some text, the program will remove all vowels');
}

let _b = '';
for (let _c of _a) {
  let _d = 'aeiou'.includes(_c.toLowerCase());
  if (!_d) {
    _b = _b + _c;
  }
}

alert(_b);
