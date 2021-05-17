let compMove = ["Rock", "Paper", "Scissors"];

function rng(min, max) {
    return Math.floor(Math.random()*(max - min +1) );
}

function computerPlay () {
    return compMove[rng(0,2)];
}


console.log(computerPlay());