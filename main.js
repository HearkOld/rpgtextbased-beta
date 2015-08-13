function load(filename, filetype) {
    if (filetype == "js") {
        var fileref = document.createElement('script');
        fileref.setAttribute("type", "text/javascript");
        fileref.setAttribute("src", filename);
    }
    var x = document.createElement("div");
    x.textContent = "Loading..." + this.filename;
    document.body.appendChild(x);
    if (typeof fileref != "undefined") {
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
}

var cant_walk = false;
var in_battle = false;
var game_on;

function startGame() {
    if (game_on == true) {
        var y = document.createElement("div");
        y.textContent = "Game is already started!"
        document.body.appendchild(y)
    } else {
        game_on = true;
        load("main.js", "js");
        load("characters.js", "js");
        load("classes.js", "js");
        load("enemies.js", "js");
        load("mob.js", "js");
        var plname = prompt("What's your name pal?");
        var x = document.createElement("div");
        x.textContent = "Hello " + plname;
        document.body.appendChild(x);


    }
}

function walk() {
    if (game_on == true) {
        var w = document.createElement("div");
        w.textContent = "You walk...";
        document.body.appendChild(w);
        var num = Math.floor((Math.random() * 200) + 1);
        if (num > 1) {
            start_battle();
        } else if (num > 51) {
            w.textContent = "You find nothing.";
            document.body.appendChild(w);
        } else if (num > 101) {
            w.textContent = "You find something.";
            document.body.appendChild(w);
        }
    }
}
