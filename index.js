// let numberToGuess = Math.floor(Math.random() * 100);
let numberToGuess = 100;
console.log(numberToGuess)

let myInput = 1;
let guessDifference = myInput - numberToGuess;

if (guessDifference < 0) {
    guessDifference = guessDifference * -1
}

if (myInput === numberToGuess) {
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

function hintFunction () {
    let hintNum1 =  Math.floor(Math.random() * 100);
    let hintNum2 =  Math.floor(Math.random() * 100);
    console.log(`It's one of these three Numbers!  ${hintNum1} or ${hintNum2} or ${numberToGuess}`)
}

function gameReset () {
    let numberToGuess = Math.floor(Math.random() * 100;
    console.log(numberToGuess)
}


// document.getElementById("myForm").reset();