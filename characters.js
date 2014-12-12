// Characters
var Player = function(hp, def, att, spa){
  this.hp = hp;
  this.def = def;
  this.att = att;
  this.spa = spa;
}

var Enemy = function(name, hp, att, def, spa){
  this.name = name;
  this.hp = hp;
  this.att = att;
  this.def = def;
  this.spa = spa;
}
var player = new Player(225, 5, 5, 5);
