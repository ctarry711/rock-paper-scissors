function computerPlay() {
    //Generate random number between 0 and 2
    randNum = Math.floor(Math.random()*3);

    //Converts random number into either rock, paper, or scissors
    let compChoice = "";
    switch (randNum) {
        case 0:
            compChoice = "rock";
            break;
        case 1:
            compChoice = "paper";
            break;
        case 2:
            compChoice = "scissors";
            break;
    }
    return compChoice
}

function userPlay() {
    let playerInput = ""
    while (!(playerInput == 'rock' || playerInput == 'paper' || playerInput == 'scissors')) {
        console.log("'" + playerInput + "' is not a valid input.")}
        playerInput = prompt("Please type 'rock', paper, or 'scissors'", "rock").toLowerCase()
    return playerInput;
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "paper" && computerSelection == "rock") || 
    (playerSelection == "scissors" && computerSelection == "paper")) {
        return(`You Win! ${playerSelection} beats ${computerSelection}`)
    }
    else if ((playerSelection == "rock" && computerSelection == "paper") || 
    (playerSelection == "paper" && computerSelection == "scissors") || 
    (playerSelection == "scissors" && computerSelection == "rock")) {
        return(`You Lose! ${playerSelection} beats ${computerSelection}`)
    }
    else if (playerSelection==computerSelection) {
        return("You Tie!")
    }
  }

function game() {
    for (let i=0; i<5; i++) {
        const playerSelection = userPlay();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game()