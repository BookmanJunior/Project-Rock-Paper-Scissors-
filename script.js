const signs = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

// returns random sign 
function getComputerChoice() {
    randomChoice = signs[Math.floor(Math.random() * 3)];
    return randomChoice;
}

function playerSelection() {
    let players_choice = prompt("Type: Rock, Paper or Scissors: ").toLowerCase();
    let capitalizedString = players_choice.charAt(0).toUpperCase() + players_choice.slice(1);
    return capitalizedString;
}

function playRound(computerSelection=playerSelection(), playerChoice=getComputerChoice()) {

    if (computerSelection === "Rock" && playerChoice === "Scissors") {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerChoice}`;
    } else if (computerSelection === "Scissors" && playerChoice === "Paper") {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerChoice}`;
    }
     else if (computerSelection === "Paper" && playerChoice === "Rock") {
        computerScore++;
        return `You Lose! ${computerSelection} beats ${playerChoice}` ;
     } else if (computerSelection === "Paper" && playerChoice === "Scissors") {
        playerScore++;
        return `You Win! ${playerChoice} beats ${computerSelection}`;
     } else if (computerSelection === "Rock" && playerChoice === "Paper") {
        playerScore++;
        return `You Win! ${playerChoice} beats ${computerSelection}`;
     } else if (computerSelection === "Scissors" && playerChoice === "Rock") {
        playerScore++;
        return `You Win! ${playerChoice} beats ${computerSelection}`;
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