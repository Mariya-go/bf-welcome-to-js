'use strict';

/*
  test cases:
    '' -> '|'
    'a' -> 'a|a'
    'hello' -> 'olleh|hello'
    ':)' -> '):|:)'


  experiment 1
    line: 25
    why: it's not workin like mirror
    trying: change the order of variables

*/

let text = null;
while (!text) {
  text = prompt('enter some text, it will be mirrored');
}

let mirrored = ' | ';
for (const character of text) {
  mirrored = character + mirrored + character;
}

alert(mirrored);
