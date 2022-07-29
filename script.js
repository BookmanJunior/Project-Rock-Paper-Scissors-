// Global variables
const signs = ["Rock", "Paper", "Scissors"];
const buttons = document.querySelector(".signs");
const result = document.querySelector(".result h2");
const restartBtn = document.querySelector(".restartBtn");
const displayPlayerScore = document.getElementById("playerScore");
const displayComputerScore = document.getElementById("computerScore");
const playerSignImage = document.querySelector(".player-sign");
const computerSignImage = document.querySelector(".computer-sign");
let playerScore = 0;
let computerScore = 0;
let winner = "";

// Event Listeners
buttons.addEventListener("click", playRound);
restartBtn.addEventListener("click", restartGame);

// Functions
function playRound(e) {
  if (playerScore === 5 || computerScore === 5) {
    announceGameWinner();
    return;
  }
  // Prevents clicking in-between buttons
  if (e.target.type === "submit") {
    const playerSelection = parseInt(e.target.id);
    const computerSelection = getComputerChoice();
    getRoundWinner(playerSelection, computerSelection);
    announceRoundWinner(playerSelection, computerSelection, winner);
    restartBtn.style.display = "initial";
  }

  if (playerScore === 5 || computerScore === 5) {
    announceGameWinner();
    return;
  }
}

function getRoundWinner(playerSelection, computerSelection) {
  playerSignImage.src = `images/${signs[playerSelection]}.png`;
  // Determine rounds winner
  if (playerSelection === 2 && computerSelection === 0) {
    return (winner = "Computer");
  } else if (playerSelection === 0 && computerSelection === 2) {
    return (winner = "Player");
  } else if (playerSelection > computerSelection) {
    return (winner = "Player");
  } else if (playerSelection < computerSelection) {
    return (winner = "Computer");
  } else {
    return (winner = "");
  }
}

function getComputerChoice() {
  randomChoice = Math.floor(Math.random() * 3);
  computerSignImage.src = `images/${signs[randomChoice]}.png`;
  return randomChoice;
}

function announceRoundWinner(playerChoice, computerChoice, winner) {
  if (winner === "Player") {
    playerScore++;
    displayPlayerScore.textContent = `Score: ${playerScore}`;
    result.textContent = `You Win! ${signs[playerChoice]} beats ${signs[computerChoice]}`;
    result.style.color = "green";
  } else if (winner === "Computer") {
    computerScore++;
    displayComputerScore.textContent = `Score: ${computerScore}`;
    result.textContent = `You Lose! ${signs[computerChoice]} beats ${signs[playerChoice]}`;
    result.style.color = "red";
  } else {
    result.textContent = "It's a tie!";
    result.style.color = "black";
  }
}

function announceGameWinner() {
  playerScore === 5
    ? (result.textContent = "You got 5 points! You Win!")
    : (result.textContent = "Computer got 5 points! You Lose!");
}

function restartGame() {
  // Reset Score
  playerScore = 0;
  computerScore = 0;
  result.textContent = "Rock Paper or Scissors?";
  displayPlayerScore.textContent = `Score: ${playerScore}`;
  displayComputerScore.textContent = `Score: ${computerScore}`;

  //Reset result style
  result.style.color = "black";

  // Reset sign images
  playerSignImage.src = "images/Rock.png";
  computerSignImage.src = "images/Rock.png";

  // Hide restart button
  restartBtn.style.display = "none";
}
