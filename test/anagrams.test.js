'use strict';

const assert = require('assert');
const { test } = require('./harness');
const groupAnagrams = require('../src/anagrams');

test('groupAnagrams: keeps first-seen order', () => {
  const result = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);
  assert.deepStrictEqual(result, [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]);
});

test('groupAnagrams: case insensitive', () => {
  assert.deepStrictEqual(groupAnagrams(['Listen', 'Silent']), [['Listen', 'Silent']]);
});

test('groupAnagrams: empty input', () => {
  assert.deepStrictEqual(groupAnagrams([]), []);
});
