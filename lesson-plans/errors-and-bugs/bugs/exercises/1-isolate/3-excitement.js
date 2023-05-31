'use strict';

/*
  test cases:
    '' -> ''
    'a' -> 'a!'
    'hello' -> 'h!e!l!l!o!'
    ':)' -> ':!)!'


  experiment 1
    line: 25
    why: because it's didn't work with more than 1 character
    trying: fix loop, add + before =

*/

let text = null;
while (!text) {
  text = prompt('enter some text, it will be excited');
}

let excited = '';
for (const character of text) {
  excited += character + '!';
}

alert(excited);
