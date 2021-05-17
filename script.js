let compMove = ["Rock", "Paper", "Scissors"];
let saveMove;
let humanMove;
let humanWin = 0;
let compWin = 0;

function rng(min, max) {
    return Math.floor(Math.random()*(max - min +1) );
}

function computerPlay() {
    saveMove = compMove[rng(0,2)];
}

function gameTime () {
    computerPlay();
    humanMove = prompt("Select your move!");
    
    console.log (`Comp played ${saveMove} and you played ${humanMove.slice(0,1).toUpperCase() + humanMove.slice(1).toLowerCase()}.`)

    if (humanMove.toLowerCase() == saveMove.toLowerCase()) {
        console.log('It is a draw')
    }

    else if (humanMove.toLowerCase() == "rock" && saveMove.toLowerCase() == "paper" || humanMove.toLowerCase() == "paper" && saveMove.toLowerCase() == "scissors" || humanMove.toLowerCase() == "scissors" && saveMove.toLowerCase() == "rock") {

        console.log('You Lose Human');
    }

    else if (humanMove.toLowerCase() !== "rock" && humanMove.toLowerCase() !== "paper" && humanMove.toLowerCase() !== "scissors") {
        console.log(`You aint know how to play rock paper scissors. You are only allowed to use "rock" "paper" and "scissors".`);
    }
    
    else {
        console.log('You Win Human!');
    }
    
}

gameTime();


