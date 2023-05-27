'use strict';

let text = null;
while (text === null) {
  text = prompt('enter some text, to each character will be add hyphen:');
}

let hyphen = '';
for (let nextChar of text) {
  hyphen = hyphen + nextChar + "-";
}

alert(hyphen);

/*  ===== Challenges =====
  - Add an hyphen after each character.
  - Add an hyphen only between the characters.
*/
