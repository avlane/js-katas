'use strict';

const PAIRS = { ')': '(', ']': '[', '}': '{' };

function isBalanced(s) {
  const stack = [];
  for (const ch of s) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
    } else if (PAIRS[ch]) {
      if (stack.pop() !== PAIRS[ch]) return false;
    }
  }
  return stack.length === 0;
}

module.exports = isBalanced;
