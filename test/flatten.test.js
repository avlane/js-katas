'use strict';

const assert = require('assert');
const { test } = require('./harness');
const flatten = require('../src/flatten');

test('flatten: deeply nested', () => {
  assert.deepStrictEqual(flatten([1, [2, [3, [4, [5]]]]]), [1, 2, 3, 4, 5]);
});

test('flatten: limited depth', () => {
  assert.deepStrictEqual(flatten([1, [2, [3, [4]]]], 1), [1, 2, [3, [4]]]);
});

test('flatten: leaves flat arrays alone', () => {
  assert.deepStrictEqual(flatten([1, 2, 3]), [1, 2, 3]);
});
