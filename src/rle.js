'use strict';

// "aaabcc" -> "3a1b2c". Input must not contain digits.
function encode(s) {
  let out = '';
  for (let i = 0; i < s.length;) {
    let j = i;
    while (j < s.length && s[j] === s[i]) j++;
    out += (j - i) + s[i];
    i = j;
  }
  return out;
}

function decode(s) {
  return s.replace(/(\d+)(\D)/g, (_, count, ch) => ch.repeat(Number(count)));
}

module.exports = { encode, decode };
