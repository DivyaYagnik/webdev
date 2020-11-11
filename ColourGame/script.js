var numSquares = 6;
var colours = generateRandomColours(numSquares);
var squares = document.querySelectorAll(".squares");
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    colours = generateRandomColours(3);
    pickedColour = pickColour();
    numSquares = 3;
    colourDisplay.textContent = pickedColour;
    for (var i = 0; i < squares.length; i++) {
        if(colours[i]) {
            squares[i].style.backgroundColor = colours[i];
        }
        else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", function() {
    numSquares = 6;
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    colours = generateRandomColours(6);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colours[i];
        squares[i].style.display = "block";
    }
});

resetButton.addEventListener("click", function() {
    colours = generateRandomColours(numSquares);
    pickedColour = pickColour();
    colourDisplay.textContent = pickedColour;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colours[i];
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colours";
    messageDisplay.textContent = "";
});

colourDisplay.textContent = pickedColour;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colours[i];

    squares[i].addEventListener("click", function() {
        var clickedColour = this.style.backgroundColor;

        if (clickedColour === pickedColour) {
            messageDisplay.textContent = "Correct";
            changeColours();
            h1.style.backgroundColor = pickedColour;
            resetButton.textContent = "Play Again?";
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again"
        }
    })
}

function changeColours() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = pickedColour;
    }
}

function pickColour() {
    var random = Math.floor(Math.random() * colours.length); 
    return colours[random];
}

function generateRandomColours(num) {
    var arr = [];

    for (i = 0; i < num; i++) {
        arr.push(randomColour());
    }

    return arr;
}

function randomColour() {
    var r =Math.floor(Math.random() * 256);
    var g =Math.floor(Math.random() * 256);
    var b =Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}