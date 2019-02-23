'use strict';

// Returns [word, count] pairs, most frequent first, ties in alphabetical order.
function wordFrequency(text) {
  const words = text.toLowerCase().match(/[a-z']+/g) || [];
  const counts = new Map();
  for (const w of words) counts.set(w, (counts.get(w) || 0) + 1);
  return Array.from(counts.entries()).sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    return a[0] < b[0] ? -1 : 1;
  });
}

module.exports = wordFrequency;
