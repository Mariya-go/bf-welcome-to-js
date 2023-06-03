import {
  whenFormDataChanges,
  readBoolean,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('user-data', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---
  let likesCat = readBoolean('likes-cats');
  let alergic = readBoolean('is-allergic');
  let ownCat = readBoolean('owns-one');

  // --- generate good advice ---
  let advice = '';
  if (likesCat) {
    advice = 'get a cat';
    
  }
  if (alergic) {
    advice = 'you are doing great';
    
  }
  if (ownCat) {
    advice = 'you could be doing worse';
    
  }
  if (likesCat && alergic) {
    advice = 'make a friend who has a cat';
    
  }
  
  if (likesCat && ownCat) {
    advice = 'you are doing great';
    
  }
  if (alergic && ownCat) {
    advice = 'rethink your life choices';
    
  }
  if (likesCat && alergic && ownCat) {
    advice = 'replace your cat with a stuffed animal';
    
  }

  // --- display advice for the user ---
  displayString('custom-advice', advice);
});
