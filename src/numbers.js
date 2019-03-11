'use strict';

function digitSum(n) {
  let sum = 0;
  for (; n > 0; n = Math.floor(n / 10)) sum += n % 10;
  return sum;
}

function digitalRoot(n) {
  while (n >= 10) n = digitSum(n);
  return n;
}

// Number of steps for n to reach 1 under the Collatz rule.
function collatzSteps(n) {
  if (n < 1 || !Number.isInteger(n)) throw new RangeError('n must be a positive integer');
  let steps = 0;
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    steps++;
  }
  return steps;
}

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a;
}

function lcm(a, b) {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / gcd(a, b);
}

module.exports = { digitSum, digitalRoot, collatzSteps, gcd, lcm };
