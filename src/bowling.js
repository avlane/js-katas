'use strict';

// rolls: the list of pins knocked down, in order, for one complete game.
function score(rolls) {
  let total = 0;
  let i = 0;
  for (let frame = 0; frame < 10; frame++) {
    if (rolls[i] === 10) {
      total += 10 + rolls[i + 1] + rolls[i + 2];
      i += 1;
    } else if (rolls[i] + rolls[i + 1] === 10) {
      total += 10 + rolls[i + 2];
      i += 2;
    } else {
      total += rolls[i] + rolls[i + 1];
      i += 2;
    }
  }
  return total;
}

module.exports = score;
