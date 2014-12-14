// Enemies

var slime = new Enemy("Slime", 35, 2, 2, 2);
var bat = new Enemy('Bat', 65, 6, 6, 6);

// selected monster
var selectedmonster;
if (num_2 < 5){
  selectedmonster = slime;
} else if (num_2 > 5){
  selectedmonster = bat;
}
