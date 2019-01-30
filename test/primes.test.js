'use strict';

const assert = require('assert');
const { test } = require('./harness');
const { sieve } = require('../src/primes');

test('sieve: primes up to 30', () => {
  assert.deepStrictEqual(sieve(30), [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
});

test('sieve: tiny limits', () => {
  assert.deepStrictEqual(sieve(0), []);
  assert.deepStrictEqual(sieve(1), []);
  assert.deepStrictEqual(sieve(2), [2]);
});

test('sieve: count below 1000', () => {
  assert.strictEqual(sieve(1000).length, 168);
});
