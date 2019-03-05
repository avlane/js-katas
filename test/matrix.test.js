'use strict';

const assert = require('assert');
const { test } = require('./harness');
const { transpose, rotateClockwise } = require('../src/matrix');

test('transpose: rectangular matrix', () => {
  assert.deepStrictEqual(transpose([[1, 2, 3], [4, 5, 6]]), [[1, 4], [2, 5], [3, 6]]);
});

test('transpose: empty matrix', () => {
  assert.deepStrictEqual(transpose([]), []);
});

test('rotateClockwise: 3x3', () => {
  const m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  assert.deepStrictEqual(rotateClockwise(m), [[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
});

test('rotateClockwise: four turns is the identity', () => {
  const m = [[1, 2], [3, 4], [5, 6]];
  let r = m;
  for (let i = 0; i < 4; i++) r = rotateClockwise(r);
  assert.deepStrictEqual(r, m);
});
