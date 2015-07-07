// Enemies
var num_2;
function getNum(){
  num_2 = Math.floor((Math.random() * 10) + 1); 
}
var slime = new Enemy("Slime", 35, 2, 2, 2);
var bat = new Enemy('Bat', 65, 6, 6, 6);

// selected monster
function startBattle(){
  getNum()
w.textContent = "You ran into a "+selectedmonster.name         
document.body.appendChild(w);
}
var selectedmonster;
if (num_2 < 5){
  selectedmonster = slime;
} else if (num_2 > 5){
  selectedmonster = bat;
}
