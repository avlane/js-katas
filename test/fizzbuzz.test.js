'use strict';

const assert = require('assert');
const { test } = require('./harness');
const fizzbuzz = require('../src/fizzbuzz');

test('fizzbuzz: first fifteen', () => {
  assert.deepStrictEqual(fizzbuzz(15), [
    '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz',
    '11', 'Fizz', '13', '14', 'FizzBuzz'
  ]);
});

test('fizzbuzz: zero gives an empty list', () => {
  assert.deepStrictEqual(fizzbuzz(0), []);
});
