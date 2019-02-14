'use strict';

const assert = require('assert');
const { test } = require('./harness');
const binarySearch = require('../src/binary-search');

test('binarySearch: finds every element', () => {
  const data = [1, 3, 5, 7, 9, 11, 13];
  data.forEach((v, i) => assert.strictEqual(binarySearch(data, v), i));
});

test('binarySearch: missing values', () => {
  assert.strictEqual(binarySearch([1, 3, 5], 4), -1);
  assert.strictEqual(binarySearch([], 4), -1);
  assert.strictEqual(binarySearch([1, 3, 5], 0), -1);
  assert.strictEqual(binarySearch([1, 3, 5], 6), -1);
});
