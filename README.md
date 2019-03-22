# js-katas

My solutions to small coding katas, written in plain Node.js with no
dependencies. I'm using this to get comfortable with modern JavaScript
(`let`/`const`, arrow functions, destructuring, `Map`).

## Katas so far

- FizzBuzz
- reverse words
- palindromes
- Roman numerals
- anagram groups
- two-sum
- Fibonacci (iterative and memoized)
- sieve of Eratosthenes
- balanced brackets
- flatten
- Caesar cipher
- binary search
- merge sort
- word frequency
- run-length encoding
- digital root, Collatz, gcd and lcm
- matrix transpose and rotation
- bowling score

Each kata is a module in `src/` with a matching `test/<name>.test.js`.

## Running the tests

    npm test

or `node test/run.js`. Needs Node 10 or newer.

There is no test framework: `test/harness.js` is a 30-line `test(name, fn)`
helper and `test/run.js` loads every `*.test.js` file next to it. A failing
test makes the process exit with a non-zero status.
