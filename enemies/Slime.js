const Enemy = require('./../base/Enemy.js');
const general = require('./../base/general.js');
module.exports = class Slime extends Enemy {
  constructor(level) {
    super('Slime', 'A jelly-like creature you don\'t want to touch.', level, level * 10, general.range(level * 5, level * 10), {
      gold: general.random(general.range(level * 5, level * 5 - 5)),
      xp: general.random(general.range(level * 5, level * 5 - 5))
    });
  }
}