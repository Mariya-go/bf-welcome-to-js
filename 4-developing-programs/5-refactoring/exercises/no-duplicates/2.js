// #todo

'use strict';

/*
  refactor this program so the I/O loop DOES NOT accept strings with duplicate characters
  hints:
    - one strategy is moving the `for-of` loop inside the I/O loop
    - you might want to try using a boolean flag for the I/O loop (or true/break/continue)

*/

let mayHaveDuplicates;
let hasNoDuplicates = '';
while (true) {
  mayHaveDuplicates = prompt('enter something with no duplicate characters');
  if (mayHaveDuplicates === null) {
    continue;
  }
for (let char of mayHaveDuplicates) {
  let isDuplicate = hasNoDuplicates.includes(char);
  if (isDuplicate) {
    break;
  }
  hasNoDuplicates = hasNoDuplicates + char;
}
if (hasNoDuplicates.length === mayHaveDuplicates.length) {
  alert('well done!');
  break;
} else {
  alert('too bad, try again');
  break;
}
}




