'use strict';

/* Strings

TODO: create a few variables(strings):
- you need to add comments to show where the variable been
declared, initialized, read , reassigned,...
*/

// Declare an animal variable and initialise it with value 'cat'
let animal = 'cat';

// Read variable animal
// Declare an myAnimal variable and initialise it with value 'I have a cat'
let myAnimal = 'I have a ' + animal;

// Declare a color variable and initialise it with value 'bege'
let color = 'bege';

// Declare an sound variable and initialise it with value 'miau'
let sound = 'miau';

// Read variables myAnimal, animal, color and sound with values 'I have a cat', 'cat', 'bege' and 'miau' values
// Declare an story variable and initialise it with value 'Hello. I am Alise. I have a cat. My cat is bege and used to say miau.'
let story = `Hello. I am Alise. ${myAnimal}. My ${animal} is ${color} and used to say ${sound}.`;

// Log story variable with value 'Hello. I am Alise. I have a cat. My cat is bege and used to say miau.'
console.log(story);

// Reassigne value 'black' to variable color
color = 'black';

// Log story variable with updated value 'Hello. I am Alise. I have a cat. My cat is black and used to say miau.'
console.log(story);