let numberOfColors = 6;
let color = randomColorGenerator(numberOfColors);

let squers = document.querySelectorAll(".squer");
let rgb = document.querySelector(".guessColor");
let message = document.querySelector("#message");
let resetButton = document.querySelector("#resetButton");
let heading = document.querySelector("h1");
let esyBtn = document.querySelector("#esyBtn");
let hrdBtn = document.querySelector("#hrdBtn");


let randomPickColor = randomColorPicker();
rgb.textContent = randomPickColor;

esyBtn.addEventListener("click", function(){
    esyBtn.classList.add("selected");
    hrdBtn.classList.remove("selected");
    numberOfColors = 3;
    color = randomColorGenerator(numberOfColors);
    for(let i = 0; i < squers.length; i++){
        if(color[i]){
            squers[i].style.backgroundColor = color[i];
        } else{
            squers[i].style.display = "none";
        }
    }

    randomPickColor = randomColorPicker();
    rgb.textContent = randomPickColor;
    message.textContent = "";
    heading.style.backgroundColor = "steelblue";
});


hrdBtn.addEventListener("click", function(){
    hrdBtn.classList.add("selected");
    esyBtn.classList.remove("selected");
    numberOfColors = 6;
    color = randomColorGenerator(numberOfColors);
    for(let i = 0; i < squers.length; i++){
            squers[i].style.backgroundColor = color[i];
            squers[i].style.display = "block";
    }

    randomPickColor = randomColorPicker();
    rgb.textContent = randomPickColor;
    message.textContent = "";
    heading.style.backgroundColor = "steelblue";
});


resetButton.addEventListener("click", function(){
    color = randomColorGenerator(numberOfColors);
    for(let i = 0; i < squers.length; i++){
        squers[i].style.backgroundColor = color[i];
    }

    randomPickColor = randomColorPicker();
    rgb.textContent = randomPickColor;

    heading.style.backgroundColor = "steelblue";
    resetButton.textContent = "Change Color";
    message.textContent = "";
});


for(let i = 0; i < squers.length; i++){
    squers[i].style.backgroundColor = color[i];

    squers[i].addEventListener("click",function(){
        if(this.style.backgroundColor === randomPickColor){
            message.textContent = "Correct";
            colorChange(randomPickColor);
            heading.style.backgroundColor = randomPickColor;
            resetButton.textContent = "Play Again";
        } else {
            message.textContent = "Try Again";
            this.style.backgroundColor = "#232323";
        }
    });
}


function colorChange(color){
    for(let i = 0; i < squers.length; i++){
        squers[i].style.backgroundColor = color;
    }
}


function randomColorPicker(){
    let random = Math.floor(Math.random() * color.length);
    return color[random];
}


function randomColorGenerator(num){
    let arr = []
    for(let i = 0; i < num; i++){
        arr.push(randomColors());
    }
    return arr;
}


function randomColors(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
} 