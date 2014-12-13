// Main
function startGame() {
  var cant_walk = false;
  var in_battle = false;
var plname = prompt("What's your name pal?");
var x = document.createElement("div");
x.textContent = "Hello " +plname;         
document.body.appendChild(x);  
function walk() { if (cant_walk = false){
  var num = Math.floor((Math.random() * 10) + 1);
  var num_2 = Math.floor((Math.random() * 10) + 1);
  if (num >= 5){
    in_battle = true;
        x.textContent = "Battle Found!"         
document.body.appendChild(x);  
    cant_walk = true;
  } else if (num <= 5){
       x.textContent = "Nothing");         
document.body.appendChild(x);  
  }
} else if (cant_walk = true){
  x.textContent = "You cannot walk now!";       
document.body.appendChild(x);  
}
function attack() {
  if (in_battle = true){
    x.textContent = ""+plname+" attacked the " +selectedmonster.name;         
document.body.appendChild(x);  
  if (selectedmonster.health <= 0){
    x.textContent = ""+plname+" killed " +selectedmonster.name;         
document.body.appendChild(x);  
  } else if (selectedmonster.health > 0){
        x.textContent = ""+selectedmonster.name+ " has "+selectedmonster.health+ " hp left";         
document.body.appendChild(x);  
  }
}
}
}
