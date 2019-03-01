'use strict';

const assert = require('assert');
const { test } = require('./harness');
const { digitSum, digitalRoot, collatzSteps } = require('../src/numbers');

test('digitSum', () => {
  assert.strictEqual(digitSum(0), 0);
  assert.strictEqual(digitSum(12345), 15);
});

test('digitalRoot', () => {
  assert.strictEqual(digitalRoot(16), 7);
  assert.strictEqual(digitalRoot(942), 6);
  assert.strictEqual(digitalRoot(132189), 6);
  assert.strictEqual(digitalRoot(5), 5);
});

test('collatzSteps', () => {
  assert.strictEqual(collatzSteps(1), 0);
  assert.strictEqual(collatzSteps(6), 8);
  assert.strictEqual(collatzSteps(27), 111);
  assert.throws(() => collatzSteps(0), RangeError);
});
