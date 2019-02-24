const Enemy = require('./../base/Enemy.js');
const general = require('./../general/general.js');
module.exports = class Slime extends Enemy {
  constructor(level) {
    super('Slime', 'A jelly-like creature you don\'t want to touch.', level, level * 10, general.range(level * 5, level * 10));
  }
}
