// Main
  var cant_walk = false;
  var in_battle = false;
function startGame() {
var plname = prompt("What's your name pal?");
var x = document.createElement("div");  
x.textContent = "Hello " +plname;         
document.body.appendChild(x);  
function walk() {
  if (cant_walk == false){
  var num = Math.floor((Math.random() * 10) + 1);
  var num_2 = Math.floor((Math.random() * 10) + 1);
  if (num >= 5){
    in_battle = true;
    x.textContent = "Battle found";         
document.body.appendChild(x);  
    cant_walk = true;
  } else if (num <= 5){
   x.textContent = "Nothing";         
document.body.appendChild(x);  
  }
  } else if (cant_walk == true){
    // finish later
  }
}
}
