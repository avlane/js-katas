'use strict';

// All primes <= limit.
function sieve(limit) {
  if (limit < 2) return [];
  const composite = new Array(limit + 1).fill(false);
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (composite[i]) continue;
    primes.push(i);
    for (let j = i * i; j <= limit; j += i) composite[j] = true;
  }
  return primes;
}

module.exports = { sieve };
