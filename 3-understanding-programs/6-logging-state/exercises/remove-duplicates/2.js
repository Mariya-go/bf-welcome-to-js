// #todo

'use strict';

/*
  log every character that is added to the final string
*/

let phrase = null;
while (!phrase) {
  phrase = prompt(
    'enter something with duplicated letters, they will be removed',
  );
}

let previous = '';

let noRepetitions = '';
for (const next of phrase) {
  if (next !== previous) {
    noRepetitions = noRepetitions + next;
  }
  
  previous = next;
  console.log(previous);
}

alert(noRepetitions);
