'use strict';

// Reverse the letters of every word but keep the word order.
function reverseEachWord(s) {
  return s.split(' ').map(w => w.split('').reverse().join('')).join(' ');
}

// Reverse the order of the words but keep each word intact.
function reverseWordOrder(s) {
  const words = s.trim().split(/\s+/);
  return words.reverse().join(' ');
}

module.exports = { reverseEachWord, reverseWordOrder };
