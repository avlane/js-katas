'use strict';

const DEFAULT_RULES = [[3, 'Fizz'], [5, 'Buzz']];

function fizzbuzz(n, rules = DEFAULT_RULES) {
  const out = [];
  for (let i = 1; i <= n; i++) {
    const word = rules
      .filter(([divisor]) => i % divisor === 0)
      .map(([, w]) => w)
      .join('');
    out.push(word || String(i));
  }
  return out;
}

module.exports = fizzbuzz;
