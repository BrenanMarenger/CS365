let currentIndex = 0; //what slot of the story we are currently at
var img = document.createElement("img");
img.style.width = "300px";

let story = [
    {//0
        text: "You're on a hike through thick forest. On your right, there is a path to a dark cave. On your left, you hear a roaring waterfall. What path do you take?",
        leftChoice: "Waterfall",
        rightChoice: "Cave",
        leftIndex: 1,
        rightIndex: 2,
        backImage: null
    },
    {//1
        text: "You are at the very top of a raging waterfall, atleast a 4 story drop! Do you cross the sketchy log?", //waterfall
        leftChoice: "Cross",
        rightChoice: "Go back",
        leftIndex: 3,
        rightIndex: 0,
        backImage: "img/waterfall.jpg"
    },
    {//2
        text: "You approach a dark mossy cave and start hearing heavy breathing near by. Under further inspection, you see a mother bear and her two cub resting. What do you do?",
        leftChoice: "Get a closer look",
        rightChoice: "Go back",
        leftIndex: 4,
        rightIndex: 0,
        backImage: "img/cave.jpg"
    },
    {//3
        text: "At the waterfall, you begin to walk on the wobbly log, as you reach the center, it bends and you see a wasp nest inside the log. What do you do?",
        leftChoice: "Run across",
        rightChoice: "Stay Calm",
        leftIndex: 5,
        rightIndex: 6,
        backImage: null
    },
    {//4
        text: "You're within a few feet of the bear family, they all look cute and comfy. One of the little cubs wakes up and notices you. What do you do?",
        leftChoice: "Pet him",
        rightChoice: "Slowly Back away",
        leftIndex: 7,
        rightIndex: 0,
        backImage: null
    },
    {//5
        text: "You rush across and just as you make it over, the log breaks and drops down the water fall. With no way back, where do you go?",
        leftChoice: "Swim back across",
        rightChoice: "Travel up the river",
        leftIndex: 6,
        rightIndex: 8,
        backImage: null
    },
    {//6
        text: "You drop into the water, and head towards the drop. What do you do?",
        leftChoice: "Accept your fate",
        rightChoice: "Panic",
        leftIndex: null,
        rightIndex: null,
        backImage: null
    },
    {//7
        text: "The angry mother bear wakes up and chases you! Where do you go?",
        leftChoice: "Waterfall",
        rightChoice: "Run in circles",
        leftIndex: 3,
        rightIndex: 8,
        backImage: null
    },
    {//8
        text: "An untouched tribe saves you! They feed you and show you the way back.",
        leftChoice: "Yay",
        rightChoice: "Yay",
        leftIndex: -1,
        rightIndex: -1,
        backImage: null
    },
];

document.getElementById("leftButton").addEventListener("click", function () {
    img.remove();
    if (story[currentIndex].leftIndex == null) { //dead
        document.getElementById("storyParagraph").innerText = "You begin falling, adrenaline spikes, end of story";
        document.getElementById("leftButton").remove();
        document.getElementById("rightButton").remove();
        return;
    }
    if (story[currentIndex].leftIndex == -1) {
        document.getElementById("storyParagraph").innerText = "You made it back safe and sound!"
        document.getElementById("leftButton").remove();
        document.getElementById("rightButton").remove();
        return;
    }

    currentIndex = story[currentIndex].leftIndex;
    document.getElementById("storyParagraph").innerText = story[currentIndex].text;
    document.getElementById("leftButton").innerHTML = story[currentIndex].leftChoice;
    document.getElementById("rightButton").innerHTML = story[currentIndex].rightChoice;

    if (story[currentIndex].backImage != null) {
        img.src = story[currentIndex].backImage;
        var src = document.getElementById("x");
        src.appendChild(img);
    }

});

document.getElementById("rightButton").addEventListener("click", function () {
    img.remove();
    if (story[currentIndex].rightIndex == null) { //dead
        document.getElementById("storyParagraph").innerText = "You begin falling, adrenaline spikes, end of story"
        document.getElementById("leftButton").remove();
        document.getElementById("rightButton").remove();
        return;
    }
    if (story[currentIndex].rightIndex == -1) {
        document.getElementById("storyParagraph").innerText = "You made it back safe and sound!"
        document.getElementById("leftButton").remove();
        document.getElementById("rightButton").remove();
        return;
    }

    currentIndex = story[currentIndex].rightIndex;
    document.getElementById("storyParagraph").innerText = story[currentIndex].text;
    document.getElementById("leftButton").innerHTML = story[currentIndex].leftChoice;
    document.getElementById("rightButton").innerHTML = story[currentIndex].rightChoice;
    if (story[currentIndex].backImage != null) {
        img.src = story[currentIndex].backImage;
        var src = document.getElementById("x");
        src.appendChild(img);
    }

});
