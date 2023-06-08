// #todo

'use strict';

/*
  modify this program so it only checks for consonants

  you can do this by changing one string, renaming a variable and the user's instructions
*/

let characters = null;
while (characters === null) {
  characters = prompt('enter some characters');
}

const consonants = 'qwrtypsdfghjklzxcvbnmQWRTYPSDFGHJKLZXCVBNM';

let hasAVowel = false;
for (const char of characters) {
  if (consonants.includes(char)) {
    hasAVowel = true;
    break;
  }
}

if (hasAVowel) {
  alert('"' + characters + '" has at least one consonant');
} else {
  alert('"' + characters + '" has no consonants');
}
