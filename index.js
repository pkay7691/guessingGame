// let numberToGuess = Math.floor(Math.random() * 100);
let numberToGuess = 5;
console.log(numberToGuess)


let count = 0;
let guessObject = {
    firstGuess: 0,
    secondGuess: 0,
    thirdGuess: 0,
    fourthGuess: 0,
    fifthGuess: 0,
    
}

function guessStatus (guess) {
    let guessDifference = guess - numberToGuess;
    if (guessDifference < 0) {
        guessDifference = guessDifference * -1
    }
    if (guessDifference === 0) {
        console.log("You Win")
    } else if (guessDifference < 10) {
            console.log("You're getting close")    
    } else if (guessDifference < 20) {
        console.log("Sort of Close")
    } else if (guessDifference < 70) {
        console.log("Not even close")
    } else if (guessDifference < 100) {
        console.log("You're bad at this")
    }
}

let textInput = document.querySelector("input");
let guessButton = document.querySelector("#guess-button");
guessButton.addEventListener("click", function() {
    guessObject.firstGuess = document.getElementById("input").value;
    console.log(numberToGuess)
    console.log(guessObject.firstGuess);
    guessStatus(guessObject.firstGuess);

})

function hintFunction () {
    let hintNum1 =  Math.floor(Math.random() * 100);
    let hintNum2 =  Math.floor(Math.random() * 100);
    console.log(`It's one of these three Numbers!  ${hintNum1} or ${hintNum2} or ${numberToGuess}`)
}

function gameReset () {
    let numberToGuess = Math.floor(Math.random() * 100);
    count = 0;
    guessObject.firstGuess = 0;
    guessObject.secondGuess = 0;
    guessObject.thirdGuess = 0;
    guessObject.fourthGuess = 0;
    guessObject.fifthGuess = 0;
    
}




// document.getElementById("myForm").reset();