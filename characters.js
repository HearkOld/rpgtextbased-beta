// Characters
var Player = function(hp, def, att, spa){
  this.hp = hp;
  this.def = def;
  this.att = att;
  this.spa = spa;
}
var Item = function(name, desc, effect, drop){
  this.name = name;
  this.desc = desc;
  this.effect = effect;
  this.drop = drop;
}
var player = new Player(225, 5, 5, 5);
