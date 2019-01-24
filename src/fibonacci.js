'use strict';

function fib(n) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return a;
}

function makeMemoFib() {
  const cache = new Map([[0, 0], [1, 1]]);
  const f = n => {
    if (!cache.has(n)) cache.set(n, f(n - 1) + f(n - 2));
    return cache.get(n);
  };
  return f;
}

module.exports = { fib, makeMemoFib };
