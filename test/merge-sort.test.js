'use strict';

const assert = require('assert');
const { test } = require('./harness');
const mergeSort = require('../src/merge-sort');

test('mergeSort: sorts numbers', () => {
  assert.deepStrictEqual(mergeSort([5, 2, 9, 1, 5, 6, 0]), [0, 1, 2, 5, 5, 6, 9]);
});

test('mergeSort: does not modify its input', () => {
  const input = [3, 1, 2];
  mergeSort(input);
  assert.deepStrictEqual(input, [3, 1, 2]);
});

test('mergeSort: matches the built-in sort on random data', () => {
  const data = [];
  for (let i = 0; i < 200; i++) data.push((i * 7919) % 101);
  assert.deepStrictEqual(mergeSort(data), data.slice().sort((a, b) => a - b));
});
