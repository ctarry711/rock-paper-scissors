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
    let playerInput = prompt("Please type 'rock', paper, or 'scissors'", "rock").toLowerCase()
    if (!(playerInput == 'rock' || playerInput == 'paper' || playerInput == 'scissors')) {
        console.log("'" + playerInput + "' is not a valid input.")
        playerInput = userPlay()}
    return playerInput;
}

function playRound(playerSelection, computerSelection) { //the second return value is 1 if you win, 2 if you lose, and 0 if you tie 
    if ((playerSelection == "rock" && computerSelection == "scissors") || 
    (playerSelection == "paper" && computerSelection == "rock") || 
    (playerSelection == "scissors" && computerSelection == "paper")) {
        return([`You Win! ${playerSelection} beats ${computerSelection}`, 1])
    }
    else if ((playerSelection == "rock" && computerSelection == "paper") || 
    (playerSelection == "paper" && computerSelection == "scissors") || 
    (playerSelection == "scissors" && computerSelection == "rock")) {
        return([`You Lose! ${playerSelection} beats ${computerSelection}`, 2])
    }
    else if (playerSelection==computerSelection) {
        return(["You Tie!", 0])
    }
  }


const buttons = document.querySelectorAll("button");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => button.addEventListener("click", () => {

    const outputDiv = document.querySelector('#log');
    
    if (playerScore >= 5) {
        newP = document.createElement("p")
        newP.textContent = "Congrat's you have won!"
        outputDiv.appendChild(newP);
    }
    else if (computerScore >= 5) {
        newP = document.createElement("p")
        newP.textContent = "Sorry, you have lost"
        outputDiv.appendChild(newP)
    }
    else {
        const playerSelection = button.id
        const computerSelection = computerPlay();
        const outcome = playRound(playerSelection, computerSelection);
        const outcomeText = outcome[0]
        const outcomeValue = outcome[1]

        if (outcomeValue) {
            outcomeValue == 1 ? playerScore += 1 : computerScore += 1
        }


        newP1 = document.createElement("p")
        newP1.textContent = "You have selected " + playerSelection;
        outputDiv.appendChild(newP1)

        newP2 = document.createElement("p")
        newP2.textContent = "The computer has selected " + computerSelection;
        outputDiv.appendChild(newP2)

        newP3 = document.createElement("p")
        newP3.textContent = outcomeText;
        outputDiv.appendChild(newP3);

        newP4 = document.createElement("p")
        newP4.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`
        outputDiv.appendChild(newP4);
    }

}))