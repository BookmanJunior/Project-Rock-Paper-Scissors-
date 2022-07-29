// Global variables
const signs = ["Rock", "Paper", "Scissors"];
const buttons = document.querySelector(".signs");
const result = document.querySelector(".result");
const restartBtn = document.querySelector(".restartBtn");
const displayPlayerScore = document.getElementById("playerScore");
const displayComputerScore = document.getElementById("computerScore");
const playerSignImage = document.querySelector(".player-sign");
const computerSignImage = document.querySelector(".computer-sign");
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById('closeBtn');
const modalWinner = document.querySelector(".game-result");
const modalContent = document.getElementById("modal-body");
const startNewGameBtn = document.getElementById("playAgain");
let playerScore = 0;
let computerScore = 0;
let winner = "";
// Event Listeners
buttons.addEventListener("click", playRound);
restartBtn.addEventListener("click", restartGame);
startNewGameBtn.addEventListener("click", restartGame);
modalCloseBtn.addEventListener("click", () => modal.style.display = "none");
modal.addEventListener("click", closeModal);


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
    modal.style.display = 'block';
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
  if (playerScore === 5) {
    modalWinner.textContent = "You got 5 points!\n You Win!";
    modalWinner.style.color = 'green';
  } else {
    modalWinner.textContent = "Computer got 5 points!\n You Lose!";
    modalWinner.style.color = 'red';
  };
};

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

  // Close modal
  modal.style.display = "none";
}

function closeModal(e) {
    if(e.target.id === 'modal') {
        modal.style.display = 'none';
    }
}