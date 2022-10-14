let numberToGuess = Math.floor(Math.random() * 100);




let guessObject = {
    firstGuess: 0,
    secondGuess: 0,
    thirdGuess: 0,
    fourthGuess: 0,
    fifthGuess: 0,
    count: 0,

}
let guessDiv = document.querySelector("#guess-div")
let guessOne = document.querySelector("#guess-1")
guessOne.innerHTML = guessObject.firstGuess;




let guessTwo = document.querySelector("#guess-2");
guessTwo.innerHTML = guessObject.secondGuess;

let guessThree = document.querySelector("#guess-3");
guessThree.innerHTML = guessObject.thirdGuess;

let guessFour = document.querySelector("#guess-4")
guessFour.innerHTML = guessObject.fourthGuess;

let guessFive = document.querySelector("#guess-5")
guessFive.innerHTML = guessObject.fifthGuess;



let count = 0;
function guessStatus(guess) {
    const guessStatusMsg = document.querySelector("#status");
    let guessDifference = guess - numberToGuess;
    if (guess < numberToGuess) {
        guessStatusMsg.innerHTML ="Last Guess was Too Low!";
    }
    else if (guess > numberToGuess) {
        guessStatusMsg.innerHTML ="Last Guess was Too High!";
    }
    else if (guess == numberToGuess) {
        guessStatusMsg.innerHTML = 'You win';
    }
}

function gameReset() {
    numberToGuess = Math.floor(Math.random() * 100);
    guessObject.count = 0;
    guessObject.firstGuess = 0;
    guessObject.secondGuess = 0;
    guessObject.thirdGuess = 0;
    guessObject.fourthGuess = 0;
    guessObject.fifthGuess = 0;
    guessOne.innerHTML = 0;
    guessTwo.innerHTML = 0;
    guessThree.innerHTML = 0;
    guessFour.innerHTML = 0;
    guessFive.innerHTML = 0;

}



let textInput = document.querySelector("input");
let guessButton = document.querySelector("#guess-button");
guessButton.addEventListener("click", function () {
    if (document.getElementById("input").value === numberToGuess) {
        console.log("You win");
        

    }
    if (guessObject.count === 0) {
        guessObject.firstGuess = document.getElementById("input").value;
        // console.log(numberToGuess)
        // console.log(guessObject.firstGuess);
        guessStatus(guessObject.firstGuess);
        let guessOne = document.querySelector("#guess-1");
        guessOne.innerHTML = guessObject.firstGuess;
        
    }
    if (guessObject.count === 1) {
        guessObject.secondGuess = document.getElementById("input").value;
        // console.log(numberToGuess)
        // console.log(guessObject.secondGuess);
        guessStatus(guessObject.secondGuess);
        let guessTwo = document.querySelector("#guess-2");
        guessTwo.innerHTML = guessObject.secondGuess;
    }
    if (guessObject.count === 2) {
        guessObject.thirdGuess = document.getElementById("input").value;
        // console.log(numberToGuess)
        // console.log(guessObject.thirdGuess);
        guessStatus(guessObject.thirdGuess);
        let guessThree = document.querySelector("#guess-3");
        guessThree.innerHTML = guessObject.thirdGuess;
        
    }
    if (guessObject.count === 3) {
        guessObject.fourthGuess = document.getElementById("input").value;
        // console.log(numberToGuess)
        // console.log(guessObject.fourthGuess);
        guessStatus(guessObject.fourthGuess);
        let guessFour = document.querySelector("#guess-4")
        guessFour.innerHTML = guessObject.fourthGuess;
    }
    if (guessObject.count === 4) {
        guessObject.fifthGuess = document.getElementById("input").value;
        // console.log(numberToGuess)
        // console.log(guessObject.fifthGuess);
        guessStatus(guessObject.fifthGuess);
        guessFive.innerHTML = guessObject.fifthGuess;
    }
    if (guessObject.count === 5) {
        hintMsg.innerHTML = `The Number was ${numberToGuess}`;
        gameReset();
        guessObject.count--;
        guessOne.innerHTML = 0;
        guessTwo.innerHTML = 0;
        guessThree.innerHTML = 0;
        guessFour.innerHTML = 0;
        guessFive.innerHTML = 0;
        
    }
    guessObject.count++;
    

    
    console.log(guessObject)
    console.log(guessObject.count);

})



// function hintFunction() {
//     let hintNum1 = Math.floor(Math.random() * 100);
//     let hintNum2 = Math.floor(Math.random() * 100);
//     console.log(`It's one of these three Numbers!  ${hintNum1} or ${hintNum2} or ${numberToGuess}`)
// }


let hintMsg = document.querySelector("#hintMessage")
let hintButton = document.querySelector("#hintButton");
hintButton.addEventListener("click", function () {
    let hintNum1 = Math.floor(Math.random() * 100);
    let hintNum2 = Math.floor(Math.random() * 100);
    hintMsg.innerHTML = `It's one of these three Numbers!  ${hintNum1} or ${hintNum2} or ${numberToGuess}`;

})

let resetButton = document.querySelector("#buttonReset")
resetButton.addEventListener("click", function() {
    gameReset();