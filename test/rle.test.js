'use strict';

const assert = require('assert');
const { test } = require('./harness');
const { encode, decode } = require('../src/rle');

test('rle: encode', () => {
  assert.strictEqual(encode('aaabcc'), '3a1b2c');
  assert.strictEqual(encode(''), '');
});

test('rle: decode', () => {
  assert.strictEqual(decode('3a1b2c'), 'aaabcc');
  assert.strictEqual(decode('12x'), 'xxxxxxxxxxxx');
});

test('rle: round trip', () => {
  const s = 'WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW';
  assert.strictEqual(decode(encode(s)), s);
});
