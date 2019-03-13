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

test('fizzbuzz: custom rules', () => {
  const rules = [[2, 'Foo'], [3, 'Bar'], [7, 'Baz']];
  assert.deepStrictEqual(fizzbuzz(7, rules), ['1', 'Foo', 'Bar', 'Foo', '5', 'FooBar', 'Baz']);
});
