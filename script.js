const signs = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// returns random sign 
function getComputerChoice() {
    randomChoice = signs[Math.floor(Math.random() * 3)];
    return randomChoice;
}

function playerSelection() {
    players_choice = prompt("Type: rock, paper or scissors: ").toLowerCase();
    return players_choice;
}

function playRound(computerSelection, playerChoice) {
    playerChoice = playerSelection()
    computerSelection = getComputerChoice()

    if (computerSelection === "rock" && playerChoice === "scissors") {
        computerScore++
        return `You Lose! ${computerSelection} beats ${playerChoice}`
    } else if (computerSelection === "scissors" && playerChoice === "paper") {
        computerScore++
        return `You Lose! ${computerSelection} beats ${playerChoice}`
    }
     else if (computerSelection === "paper" && playerChoice === "rock") {
        computerScore++
        return `You Lose! ${computerSelection} beats ${playerChoice}` 
     } else if (computerSelection === "paper" && playerChoice === "scissors") {
        playerScore++
        return `You Win! ${playerChoice} beats ${computerSelection}`
     } else if (computerSelection === "rock" && playerChoice === "paper") {
        playerScore++
        return `You Win! ${playerChoice} beats ${computerSelection}`
     } else if (computerSelection === "scissors" && playerChoice === "rock") {
        playerScore++
        return `You Win! ${playerChoice} beats ${computerSelection}`
     } else {
        return `It's a draw!`
     }
}

function game() {
    for (i = 0; i < 5; i++) {
        console.log(playRound())
    }
    console.log(computerScore, playerScore)
    if (computerScore > playerScore) {
        console.log("Computer wins in best of 5!")
    } else {
        console.log("You win in best of 5!")
    }
}