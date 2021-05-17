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

    else if (humanMove.toLowerCase() == "rock" && saveMove.toLowerCase() == "paper") {

        console.log('You Lose Human');
    }
    
    else {
        console.log('It\'s a wip');
    }
    console.log(compWin);
}

gameTime();


