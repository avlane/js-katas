'use strict';

function transpose(m) {
  if (m.length === 0) return [];
  return m[0].map((_, col) => m.map(row => row[col]));
}

// Rotate 90 degrees clockwise.
function rotateClockwise(m) {
  return transpose(m).map(row => row.reverse());
}

module.exports = { transpose, rotateClockwise };
