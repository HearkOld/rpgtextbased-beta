// Enemies
var Enemy = function(name, hp, att, def, spa){
  this.name = name;
  this.hp = hp;
  this.att = att;
  this.def = def;
  this.spa = spa;
}
var slime = new Enemy("Slime", 35, 2, 2, 2);
