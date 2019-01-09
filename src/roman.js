'use strict';

const TABLE = [
  [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
  [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
  [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
];

function toRoman(n) {
  let out = '';
  for (const [value, symbol] of TABLE) {
    while (n >= value) {
      out += symbol;
      n -= value;
    }
  }
  return out;
}

const VALUES = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

function fromRoman(str) {
  let total = 0;
  for (let i = 0; i < str.length; i++) {
    const current = VALUES[str[i]];
    const next = VALUES[str[i + 1]] || 0;
    total += current < next ? -current : current;
  }
  return total;
}

module.exports = { toRoman, fromRoman };
