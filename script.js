let d1 = document.querySelector("#d1");
let d2 = document.querySelector("#d2");
let d3 = document.querySelector("#d3");
let d4 = document.querySelector("#d4");
let d5 = document.querySelector("#d5");
let d6 = document.querySelector("#d6");
let d7 = document.querySelector("#d7");
let d8 = document.querySelector("#d8");
let d9 = document.querySelector("#d9");
let d10 = document.querySelector("#d10");
let d11 = document.querySelector("#d11");
let d12 = document.querySelector("#d12");
let d13 = document.querySelector("#d13");
let d14 = document.querySelector("#d14");
let d15 = document.querySelector("#d15");
let d16 = document.querySelector("#d16");
let count = 0;

let rndm = Math.floor(Math.random()*16+1);
console.log(rndm);
//let rndm = 1;
if(rndm == 1){
    d1.addEventListener("click",function(){
        d1.style.backgroundColor = "red";
        gameOver();
        gameOverSound();
    })
}else{
    d1.addEventListener("click",function(){
        d1.style.backgroundColor = "green";
        d1.innerText = 1;
        count++;
        if(count == 15){
            gameWon();
            gameWonSound();
        }
    })
}

if(rndm == 2){
    d2.addEventListener("click",function(){
        d2.style.backgroundColor = "red";
        gameOver();
        gameOverSound();
    })
}else{
    d2.addEventListener("click",function(){
        d2.style.backgroundColor = "green";
        d2.innerText = 2;
        count++;
        if(count == 15){
            gameWon();
            gameWonSound();
        }
    })
}

if(rndm == 3){
    d3.addEventListener("click",function(){
        d3.style.backgroundColor = "red";
        gameOver();
        gameOverSound();
    })
}else{
    d3.addEventListener("click",function(){
        d3.style.backgroundColor = "green";
        d3.innerText = 3;
        count++;
        if(count == 15){
            gameWon();
            gameWonSound();
        }
    })
}

if(rndm == 4){
    d4.addEventListener("click",function(){
        d4.style.backgroundColor = "red";
        gameOver();
        gameOverSound();
    })
}else{
    d4.addEventListener("click",function(){
        d4.style.backgroundColor = "green";
        d4.innerText = 4;
        count++;
        if(count == 15){
            gameWon();
            gameWonSound();
        }
    })
}

if(rndm == 5){
    d5.addEventListener("click",function(){
        d5.style.backgroundColor = "red";
        gameOver();
        gameOverSound();
    })
}else{
    d5.addEventListener("click",function(){
        d5.style.backgroundColor = "green";
        d5.innerText = 5;
        count++;
        if(count == 15){
            gameWon();
            gameWonSound();
        }
    })
}

if(rndm == 6){
    d6.addEventListener("click",function(){
        d6.style.backgroundColor = "red";
        gameOver();
        gameOverSound();
    })
}else{
    d6.addEventListener("click",function(){
        d6.style.backgroundColor = "green";
        d6.innerText = 6;
        count++;
        if(count == 15){
            gameWon();
            gameWonSound();
        }
    })
}

if(rndm == 7){
    d7.addEventListener("click",function(){
        d7.style.backgroundColor = "red";
        gameOver();
        gameOverSound();
    })
}else{
    d7.addEventListener("click",function(){
        d7.style.backgroundColor = "green";
        d7.innerText = 7;
        count++;
        if(count == 15){
            gameWon();
            gameWonSound();
        }
    })
}

if(rndm == 8){
    d8.addEventListener("click",function(){
        d8.style.backgroundColor = "red";
        gameOver();
        gameOverSound();
    })
}else{
    d8.addEventListener("click",function(){
        d8.style.backgroundColor = "green";
        d8.innerText = 8;
        count++;
        if(count == 15){
            gameWon();
            gameWonSound();
        }
    })
}

if(rndm == 9){
    d9.addEventListener("click",function(){
        d9.style.backgroundColor = "red";
        gameOver();
        gameOverSound();
    })
}else{
    d9.addEventListener("click",function(){
        d9.style.backgroundColor = "green";
        d9.innerText = 9;
        count++;
        if(count == 15){
            gameWon();
            gameWonSound();
        }
    })
}

if(rndm == 10){
    d10.addEventListener("click",function(){
        d10.style.backgroundColor = "red";
        gameOver();
        gameOverSound();
    })
}else{
    d10.addEventListener("click",function(){
        d10.style.backgroundColor = "green";
        d10.innerText = 10;
        count++;
        if(count == 15){
            gameWon();
            gameWonSound();
        }
    })
}

if(rndm == 11){
    d11.addEventListener("click",function(){
        d11.style.backgroundColor = "red";
        gameOver();
        gameOverSound();
    })
}else{
    d11.addEventListener("click",function(){
        d11.style.backgroundColor = "green";
        d11.innerText = 11;
        count++;
        if(count == 15){
            gameWon();
            gameWonSound();
        }
    })
}

if(rndm == 12){
    d12.addEventListener("click",function(){
        d12.style.backgroundColor = "red";
        gameOver();
        gameOverSound();
    })
}else{
    d12.addEventListener("click",function(){
        d12.style.backgroundColor = "green";
        d12.innerText = 12;
        count++;
        if(count == 15){
            gameWon();
            gameWonSound();
        }
    })
}

if(rndm == 13){
    d13.addEventListener("click",function(){
        d13.style.backgroundColor = "red";
        gameOver();
        gameOverSound();
    })
}else{
    d13.addEventListener("click",function(){
        d13.style.backgroundColor = "green";
        d13.innerText = 13;
        count++;
        if(count == 15){
            gameWon();
            gameWonSound();
        }
    })
}

if(rndm == 14){
    d14.addEventListener("click",function(){
        d14.style.backgroundColor = "red";
        gameOver();
        gameOverSound();
    })
}else{
    d14.addEventListener("click",function(){
        d14.style.backgroundColor = "green";
        d14.innerText = 14;
        count++;
        if(count == 15){
            gameWon();
            gameWonSound();
        }
    })
}

if(rndm == 15){
    d15.addEventListener("click",function(){
        d15.style.backgroundColor = "red";
        gameOver();
        gameOverSound();
    })
}else{
    d15.addEventListener("click",function(){
        d15.style.backgroundColor = "green";
        d15.innerText = 15;
        count++;
        if(count == 15){
            gameWon();
            gameWonSound();
        }
    })
}

if(rndm == 16){
    d16.addEventListener("click",function(){
        d16.style.backgroundColor = "red";
        gameOver();
        gameOverSound();
    })
}else{
    d16.addEventListener("click",function(){
        d16.style.backgroundColor = "green";
        d16.innerText = 16;
        count++;
        if(count == 15){
            gameWon();
            gameWonSound();
        }
    })
}
let soundOne = new Audio("sound/gameover.mp3");
let soundTwo = new Audio("sound/gamewon.mp3");
function gameOver(){
    let gameOverScreen = document.querySelector("#gameOverScreen");
    gameOverScreen.style.display = "flex";
}

function gameWon(){
    let gameWonScreen = document.querySelector("#gameWonScreen");
    gameWonScreen.style.display = "flex";
}

function gameOverSound(){
    soundOne.play();
}
function gameWonSound(){
    soundTwo.play();
}