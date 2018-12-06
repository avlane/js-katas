'use strict';

const tests = [];

function test(name, fn) {
  tests.push({ name, fn });
}

function run() {
  let failed = 0;
  for (const t of tests) {
    try {
      t.fn();
      console.log('  ok   ' + t.name);
    } catch (err) {
      failed++;
      console.log('  FAIL ' + t.name);
      console.log('       ' + (err && err.message));
    }
  }
  console.log('\n' + (tests.length - failed) + '/' + tests.length + ' passed');
  return failed;
}

module.exports = { test, run };
