const signs = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

// returns random sign 
function getComputerChoice() {
    randomChoice = signs[Math.floor(Math.random() * 3)];
    return randomChoice;
}

function getPlayerChoice() {
    let playersChoice = prompt("Type: Rock, Paper or Scissors: ").toLowerCase();
    let capitalizedString = playersChoice.charAt(0).toUpperCase() + playersChoice.slice(1);
    return capitalizedString;
}

function playRound(computerSelection=getPlayerChoice(), playerSelection=getComputerChoice()) {

    if (computerSelection === "Rock" && playerSelection === "Scissors") {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
     else if (computerSelection === "Paper" && playerSelection === "Rock") {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerSelection}` ;
     } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
     } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
     } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        playerScore++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
     } else {
        return `It's a draw!`;
     }
}

function game() {
    for (i = 0; i < 5; i++) {
        console.log(playRound())
    }
    if (computerScore > playerScore) {
        console.log("Computer wins in the best of 5!")
    } else {
        console.log("You win in the best of 5!")
    }
}