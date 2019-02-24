const general = {
  random: require('./general/random.js'),
  range: require('./general/range.js')
};
module.exports = class Enemy {
  constructor(name, description, level, health = 20, damageRange = general.range(5, 10)) {
    this.name = name;
    this.description = description;
    this.level = level;
    this.health = health;
    this.allHealth = health;
    this.damageRange = damageRange;
    //-----
  }
  toString() {
    return `${this.name} LVL ${this.level} ${this.health}/${this.allHealth}\n${this.description}`
  }
}
