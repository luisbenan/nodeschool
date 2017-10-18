class Character {
  constructor(x, y, health__) {
    this.x = x;
    this.y = y;
    this.health__ = 100;
  };
  damage() {
    this.health__ -= 10;
  };
  getHealth() {
    return this.health__;
  };
  toString() {
    return "x: " + this.x + " y: " + this.y + " health: " + this.getHealth();
  };

}

var x = process.argv[2];
var y = process.argv[3];
var character = new Character(+x, +y);
character.damage();
console.log(character.toString());
