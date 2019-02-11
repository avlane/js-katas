'use strict';

const assert = require('assert');
const { test } = require('./harness');
const caesar = require('../src/caesar');

test('caesar: shifts letters and keeps the rest', () => {
  assert.strictEqual(caesar('Hello, World!', 3), 'Khoor, Zruog!');
});

test('caesar: negative shift undoes a positive one', () => {
  assert.strictEqual(caesar(caesar('Attack at Dawn', 7), -7), 'Attack at Dawn');
});

test('caesar: wraps around the alphabet', () => {
  assert.strictEqual(caesar('xyz', 3), 'abc');
  assert.strictEqual(caesar('abc', -3), 'xyz');
  assert.strictEqual(caesar('abc', 26 * 5 + 1), 'bcd');
});
