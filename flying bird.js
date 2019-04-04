/**
 * Created by COMPUTER POINT on 4/2/2019.
 */

    //Bird droping egg program

var eggpositiony = 150
var eggpositionx = 550
var initiaposition = -200;
function flyingbird() {
    initiaposition++;
    var bird = document.getElementById("bird");
    var egg = document.getElementById("egg")
    bird.style.left = initiaposition + "px";
    egg.style.left = eggpositionx + "px";
    egg.style.top = eggpositiony + "px";
    egg.style.visibility = "hidden"


    if (initiaposition > 1000) {
        initiaposition = -200
    }

    if (initiaposition > 450) {
        eggmove();
    }


}

function eggmove() {
    var egg = document.getElementById("egg");
    egg.style.visibility = "visible";
    eggpositiony++;
    egg.style.top = eggpositiony + "px"
    if (eggpositiony > 700) {
        eggpositiony = 150
    }


}

setInterval(flyingbird, 10)

