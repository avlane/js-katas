'use strict';

const assert = require('assert');
const { test } = require('./harness');
const isBalanced = require('../src/brackets');

test('brackets: balanced', () => {
  assert.strictEqual(isBalanced('()[]{}'), true);
  assert.strictEqual(isBalanced('{[()]}'), true);
  assert.strictEqual(isBalanced('f(x[0]) { return 1; }'), true);
});

test('brackets: unbalanced', () => {
  assert.strictEqual(isBalanced('(]'), false);
  assert.strictEqual(isBalanced('(('), false);
  assert.strictEqual(isBalanced(')('), false);
});
