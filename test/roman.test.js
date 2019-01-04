'use strict';

const assert = require('assert');
const { test } = require('./harness');
const { toRoman } = require('../src/roman');

test('toRoman: basic numbers', () => {
  assert.strictEqual(toRoman(1), 'I');
  assert.strictEqual(toRoman(4), 'IV');
  assert.strictEqual(toRoman(9), 'IX');
  assert.strictEqual(toRoman(14), 'XIV');
});

test('toRoman: bigger numbers', () => {
  assert.strictEqual(toRoman(1994), 'MCMXCIV');
  assert.strictEqual(toRoman(2019), 'MMXIX');
});
