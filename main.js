// Main
function startGame() {
  var cant_walk = false;
  var in_battle = false;
var plname = prompt("What's your name pal?");
var msg = document.createElement("div");  // Creates a new <div> node
msg.textContent = "Hello " +plname;         // Sets the text content
document.body.appendChild(msg);  
function walk() {
  var num = Math.floor((Math.random() * 10) + 1);
  var num_2 = Math.floor((Math.random() * 10) + 1);
  if (num >= 5){
    in_battle = true;
    document.write('Battle Found!');
    cant_walk = true;
  } else if (num <= 5){
    document.write('Nothing');
  }
}
}
