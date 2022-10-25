
let currentSound = null;

function playSwingSound() {
    let mySound = new Audio("swing.wav");
    mySound.play();
}

function playBottleSound() {
    let mySound = new Audio("bottle.wav");
    mySound.play();
}

function playDoorSound() {
    let mySound = new Audio("door.wav");
    mySound.play();
}

document.getElementById("bottle").addEventListener("click", playBottleSound);
document.getElementById("swing1").addEventListener("click", playSwingSound);
document.getElementById("door").addEventListener("click", playDoorSound);



function getSoundPlayerFor(soundURL) {
    return function () {
        let mySound = new Audio(soundURL);
        mySound.play();
        currentSound = mySound;
    }
}

function appendButtonForSound(title, soundURL) {
    let b = document.createElement("button");
    //TODO: Set b's innerText to the title, and add a click event listener to b using our function factory "getSoundPlayerFor"
    b.innerText = title;
    b.addEventListener("click", getSoundPlayerFor(soundURL));
    document.body.append(b);
}

appendButtonForSound("Door Button", "door.wav");
appendButtonForSound("Swing Button", "swing.wav");
appendButtonForSound("Bottle Button", "bottle.wav");

function progressBar() {
    if (currentSound != null && isFinite(currentSound.duration)) {
        let prog = document.getElementById("Prog");
        prog.max = currentSound.duration;
        prog.value = currentSound.currentTime;
        //set prog bar max property to currentSound.duration
        //set value property to currentSound.currentTime
    }
}

setInterval(progressBar, 15);

