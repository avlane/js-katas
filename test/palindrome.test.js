'use strict';

const assert = require('assert');
const { test } = require('./harness');
const isPalindrome = require('../src/palindrome');

test('palindrome: simple words', () => {
  assert.strictEqual(isPalindrome('racecar'), true);
  assert.strictEqual(isPalindrome('racecars'), false);
});

test('palindrome: ignores case and punctuation', () => {
  assert.strictEqual(isPalindrome('A man, a plan, a canal: Panama'), true);
});

test('palindrome: empty string counts', () => {
  assert.strictEqual(isPalindrome(''), true);
});
