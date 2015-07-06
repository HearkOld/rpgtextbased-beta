// Main
  var cant_walk = false;
  var in_battle = false;
function startGame() {
  var game_on = true
var plname = prompt("What's your name pal?");
var x = document.createElement("div");  
x.textContent = "Hello " +plname;         
document.body.appendChild(x);  
}
function walk() {
  if(game_on == true){
  x.textContent = "Player walks...";         
document.body.appendChild(x);  
}
}
