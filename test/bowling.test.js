'use strict';

const assert = require('assert');
const { test } = require('./harness');
const score = require('../src/bowling');

const many = (n, pins) => new Array(n).fill(pins);

test('bowling: gutter game', () => {
  assert.strictEqual(score(many(20, 0)), 0);
});

test('bowling: all ones', () => {
  assert.strictEqual(score(many(20, 1)), 20);
});

test('bowling: one spare', () => {
  assert.strictEqual(score([5, 5, 3].concat(many(17, 0))), 16);
});

test('bowling: one strike', () => {
  assert.strictEqual(score([10, 3, 4].concat(many(16, 0))), 24);
});

test('bowling: perfect game', () => {
  assert.strictEqual(score(many(12, 10)), 300);
});

test('bowling: all spares', () => {
  assert.strictEqual(score(many(21, 5)), 150);
});
