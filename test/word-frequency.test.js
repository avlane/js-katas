'use strict';

const assert = require('assert');
const { test } = require('./harness');
const wordFrequency = require('../src/word-frequency');

test('wordFrequency: counts and orders', () => {
  const result = wordFrequency('the cat and the hat and the bat');
  assert.deepStrictEqual(result, [['the', 3], ['and', 2], ['bat', 1], ['cat', 1], ['hat', 1]]);
});

test('wordFrequency: ignores case and punctuation', () => {
  assert.deepStrictEqual(wordFrequency("Don't stop. DON'T stop!"), [["don't", 2], ['stop', 2]]);
});

test('wordFrequency: no words', () => {
  assert.deepStrictEqual(wordFrequency('... !!!'), []);
});
