// #todo

'use strict';

/* Dogify

  A user can input some text and all "d"s will be replaced with "dog".
    - given the user cancels:
        they are prompted again
    - given their input has any lower case "d"s:
        all "d"s are replaced with "dog"
    - given their input has any upper case "D"s:
        all "D"s are replaced with "DOG"
    - given their input has any upper & lower case "d"s:
        all "d"s are replaced with "dog"
        and all "D"s are replaced with "DOG"

  test cases:
    contains no "d"s:
      ' '           ->   ' '
      'abc'         ->   'abc'
      'market'      ->   'market'
    contains lower case "d"s:
      'd'           ->  'dog'
      'toad'        ->  'toadog'
      'disk'        ->  'dogisk'
      'Iddam'       ->  'Idogdogam'
    contains upper case "d"s:
      'D'           ->  'DOG'
      'ToaD'        ->  'ToaDOG'
      'Disk'        ->  'DOGisk'
      'iDDam'       ->  'iDOGDOGam'
    contains both upper and lower "d"s:
      'dD'          ->  'dogDOG'
      'Do dump'     ->  'DOGo dogump'
      'dim mooD'    -> 'dogim mooDOG'
*/

/* --- get user input ---*/
let input = null;
while(input === null) {
  input = prompt('enter some text, all "d" will be replaced "dog", all "D" will be replaced "DOG"')
}

/* --- replace letters --- */
let dogged = '';

for (const character of input) {
  if (character === 'd') {
    dogged = dogged + 'dog';
    continue;
  }
  if (character === 'D') {
    dogged = dogged + 'DOG';
    continue;
  }
  dogged = dogged + character;
}

/* --- display message --- */
alert(dogged);