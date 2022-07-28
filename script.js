// Global variables
const signs = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;
let playerChoice;

const buttons = document.querySelector(".signs");
const result = document.querySelector(".result h3");
const restartBtn = document.querySelector(".resetBtn");
const displayPlayerScore = document.getElementById("playerScore");
const displayComputerScore = document.getElementById("computerScore");

// Event listeners
buttons.addEventListener("click", getPlayerChoice);
buttons.addEventListener("click", playGame);
restartBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  displayPlayerScore.textContent = `Your Score: ${playerScore}`;
  displayComputerScore.textContent = `Computer Score:  ${computerScore}`;
});

// returns random number
function getComputerChoice() {
  randomChoice = Math.floor(Math.random() * 3);
  return randomChoice;
}

// Get players input
function getPlayerChoice(e) {
  let button = e.target.textContent;
  switch (button) {
    case "Rock":
      return (playerChoice = 0);
    case "Paper":
      return (playerChoice = 1);
    case "Scissors":
      return (playerChoice = 2);
  }
}

function playRound(playerSelection, computerSelection) {
  // If either selection is greater than the other they win. Except in a few cases.

  // Check if either of players reached 5 points.
if (playerSelection === 2 && computerSelection === 0) {
    computerScore++;
    displayComputerScore.textContent = `Computer's Score: ${computerScore}`;
    result.textContent = `You Lose! ${signs[computerSelection]} beats ${signs[playerSelection]}`;
} else if (playerSelection === 0 && computerSelection === 2) {
    playerScore++;
    displayPlayerScore.textContent = `Your Score: ${playerScore}`;
    result.textContent = `You Win! ${signs[playerSelection]} beats ${signs[computerSelection]}`;
} else if (playerSelection > computerSelection) {
    playerScore++;
    displayPlayerScore.textContent = `Your Score: ${playerScore}`;
    result.textContent = `You Win! ${signs[playerSelection]} beats ${signs[computerSelection]}`;
} else if (playerSelection < computerSelection) {
    computerScore++;
    displayComputerScore.textContent = `Computer's Score: ${computerScore}`;
    result.textContent = `You Lose! ${signs[computerSelection]} beats ${signs[playerSelection]}`;
} else {
    result.textContent = "It's a tie!";
}
}

function playGame() {
  playRound(
    (playerSelection = playerChoice),
    (computerSelection = getComputerChoice())
  );
}
