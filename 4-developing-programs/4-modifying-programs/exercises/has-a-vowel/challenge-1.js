// #todo

'use strict';

/*
  modify this program so it only checks for upper-case vowels

  you can do this by changing one line and the user's instructions
*/

let characters = null;
while (characters === null) {
  characters = prompt('enter some characters, we check upercase vowels');
}

const vowels = 'AEIOU';

let hasAVowel = false;
for (const char of characters) {
  if (vowels.includes(char)) {
    hasAVowel = true;
    break;
  }
}

if (hasAVowel) {
  alert('"' + characters + '" has at least one upercase vowel');
} else {
  alert('"' + characters + '" has no upercase vowels');
}
