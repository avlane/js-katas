'use strict';

const assert = require('assert');
const { test } = require('./harness');
const { reverseEachWord, reverseWordOrder } = require('../src/reverse-words');

test('reverseEachWord flips letters inside words', () => {
  assert.strictEqual(reverseEachWord('hello big world'), 'olleh gib dlrow');
});

test('reverseWordOrder flips the word order', () => {
  assert.strictEqual(reverseWordOrder('  one two   three '), 'three two one');
});
