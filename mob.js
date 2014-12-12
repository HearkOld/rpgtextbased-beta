var Item = function(name, desc, effect, drop){
  this.name = name;
  this.desc = desc;
  this.effect = effect;
  this.drop = drop;
}
var inventory = [];
var potion = new Item("Potion", "Heal by 25 points", 25, 50%);
