'use strict';

let toggle = true;

while (true) {
  if (toggle) {
    console.log('<');
  } else {
    console.log('>');
  }
  toggle = !toggle;
  console.log('all done');
}

// unreachable code:

