// Main
// Player
function startGame() {
  var cant_walk = false;
  var in_battle = false;
var plname = prompt("What's your name pal?");
document.write('Oh, hello '+name);
document.write('<b>Welcome to RPGTB</b>');
function walk() {
  var num = Math.floor((Math.random() * 10) + 1);
  var num_2 = Math.floor((Math.random() * 10) + 1);
  if (num => 5){
    in_battle = true;
    document.write('Battle Found!');
    cant_walk = true;
  } else if (num <= 5){
    document.write('Nothing');
  }
}
}
