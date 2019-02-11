'use strict';

function shiftChar(ch, shift) {
  const code = ch.charCodeAt(0);
  let base;
  if (code >= 65 && code <= 90) base = 65;
  else if (code >= 97 && code <= 122) base = 97;
  else return ch;
  return String.fromCharCode(((code - base + shift) % 26 + 26) % 26 + base);
}

function caesar(text, shift) {
  return text.split('').map(ch => shiftChar(ch, shift)).join('');
}

module.exports = caesar;
