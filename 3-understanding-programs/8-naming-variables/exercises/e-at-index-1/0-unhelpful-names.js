// #todo

'use strict';

/*
  _a: is index
    declaration: yes
      init: yes
      types: number
      scopes: global
    reads: 5
      scopes: global
      checks: wile, else if
    assignments: 1
      types: number
      scopes:global


*/

alert('you will need to enter strings with "e" in the right place');

let _a = 0;

let _b = 'entries:';

let _c = true;
while (_c) {
  let _d = prompt('_d a string with "e" at index ' + _a);

  if (_d === null) {
    _c = !confirm('are you sure you want to exit?');
  } else if (_d[_a] === 'e') {
    _b = _b + '\n' + _a + '. "' + _d + '"';
    _a = _a + 1;
  } else {
    _b = _b + '\nx. "' + _d + '"';
    _c = false;
  }
}

alert('your score: ' + _a + '\n\n' + _b);
