'use strict';

const assert = require('assert');
const { test } = require('./harness');
const { toRoman, fromRoman } = require('../src/roman');

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
test('fromRoman: subtractive pairs', () => {
  assert.strictEqual(fromRoman('IV'), 4);
  assert.strictEqual(fromRoman('MCMXCIV'), 1994);
});

test('toRoman: rejects out of range input', () => {
  assert.throws(() => toRoman(0), RangeError);
  assert.throws(() => toRoman(4000), RangeError);
  assert.throws(() => toRoman(2.5), RangeError);
});

test('fromRoman: rejects non-canonical input', () => {
  assert.throws(() => fromRoman('IIII'), SyntaxError);
  assert.throws(() => fromRoman('ABC'), SyntaxError);
  assert.throws(() => fromRoman(''), SyntaxError);
});

test('fromRoman: round trip for 1..2000', () => {
  for (let n = 1; n <= 2000; n++) {
    assert.strictEqual(fromRoman(toRoman(n)), n);
  }
});
