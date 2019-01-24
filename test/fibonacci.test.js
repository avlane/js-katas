'use strict';

const assert = require('assert');
const { test } = require('./harness');
const { fib, makeMemoFib } = require('../src/fibonacci');

test('fib: first values', () => {
  assert.deepStrictEqual([0, 1, 2, 3, 4, 5, 6, 7].map(fib), [0, 1, 1, 2, 3, 5, 8, 13]);
});

test('fib: fib(50)', () => {
  assert.strictEqual(fib(50), 12586269025);
});

test('memo fib agrees with iterative fib', () => {
  const memo = makeMemoFib();
  for (let i = 0; i <= 60; i++) assert.strictEqual(memo(i), fib(i));
});
