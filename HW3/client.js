//https://www.quora.com/How-do-you-insert-an-image-in-Javascript

let question = document.getElementById("question");
let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");

var img = document.createElement("img");
img.style.width = "300px";

option1.addEventListener("click", function () {
    question.innerHTML = "Where would you fly to?";
    option1.innerText = "Dream Vacation";
    option2.innerText = "To Help Others";
    flying();
})
option2.addEventListener("click", function () {
    question.innerHTML = "Would you travel into the past or Future?";
    option1.innerText = "Past";
    option2.innerText = "Future";
    timeTravel();
})

function flying() {
    option1.addEventListener("click", function () { //Dream
        img.src = "fly.jpg";
        var src = document.getElementById("x");
        src.appendChild(img);
        question.innerHTML = "You lived your dreams and fly back in time for work!";

        removeButton();
        document.body.style.backgroundColor = "#50C878";
    })
    option2.addEventListener("click", function () { //help
        img.src = "fly.jpg";
        var src = document.getElementById("x");
        src.appendChild(img);
        question.innerHTML = "People love you, but you have far too many resposibilites.";
        removeButton();
        document.body.style.backgroundColor = "yellow";
    })
}

function timeTravel() {
    option1.addEventListener("click", function () { //Past
        img.src = "time.jpg";
        var src = document.getElementById("x");
        src.appendChild(img);
        question.innerHTML = "You travel back in time, before you had powers. You're permanently stuck there now!";
        removeButton();
        document.body.style.backgroundColor = "red";

    })
    option2.addEventListener("click", function () { //future
        img.src = "time.jpg";
        var src = document.getElementById("x");
        src.appendChild(img);
        question.innerHTML = "You get to experience human life and technology thousands of years in the future and travel back as if no time had pasted!";
        removeButton();
        document.body.style.backgroundColor = "#50C878";
    })
}

function removeButton() {
    option1.remove();
    option2.remove();
}
