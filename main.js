// Main

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
var Item = function(name, desc, effect, drop){
  this.name = name;
  this.desc = desc;
  this.effect = effect;
  this.drop = drop;
}

// Player
var player = new Player(225, 5, 5, 5);
// Enemies
var slime = new Enemy(35, 2, 2, 2);
function startGame(); {
var plname = prompt("What's your name pal?");
document.write('Oh, hello '+name);
