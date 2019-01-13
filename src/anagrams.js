'use strict';

function groupAnagrams(words) {
  const groups = new Map();
  for (const word of words) {
    const key = word.toLowerCase().split('').sort().join('');
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(word);
  }
  return Array.from(groups.values());
}

module.exports = groupAnagrams;
