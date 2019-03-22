'use strict';

const assert = require('assert');
const { test } = require('./harness');
const twoSum = require('../src/two-sum');

test('twoSum: finds the pair', () => {
  assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  assert.deepStrictEqual(twoSum([3, 2, 4], 6), [1, 2]);
});

test('twoSum: duplicates', () => {
  assert.deepStrictEqual(twoSum([3, 3], 6), [0, 1]);
});

test('twoSum: no answer gives null', () => {
  assert.strictEqual(twoSum([1, 2, 3], 10), null);
});

test('twoSum: negative numbers', () => {
  assert.deepStrictEqual(twoSum([-3, 4, 3, 90], 0), [0, 2]);
});
