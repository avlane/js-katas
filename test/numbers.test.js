'use strict';

const assert = require('assert');
const { test } = require('./harness');
const { digitSum, digitalRoot, collatzSteps, gcd, lcm } = require('../src/numbers');

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
test('gcd', () => {
  assert.strictEqual(gcd(12, 18), 6);
  assert.strictEqual(gcd(17, 5), 1);
  assert.strictEqual(gcd(0, 9), 9);
  assert.strictEqual(gcd(-12, 18), 6);
});

test('lcm', () => {
  assert.strictEqual(lcm(4, 6), 12);
  assert.strictEqual(lcm(0, 6), 0);
  assert.strictEqual(lcm(7, 3), 21);
});
