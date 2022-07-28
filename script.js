// Global variables
const signs = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelector(".signs");
const result = document.querySelector(".result h2");
const restartBtn = document.querySelector(".restartBtn");
const displayPlayerScore = document.getElementById("playerScore");
const displayComputerScore = document.getElementById("computerScore");
const playerSignImage = document.querySelector(".player-sign")
const computerSignImage = document.querySelector(".computer-sign")


buttons.addEventListener('click', playRound);

// Restart game
restartBtn.addEventListener('click', () => {
  // Reset Score
  playerScore = 0;
  computerScore = 0;
  result.textContent = 'Rock, Paper or Scissors?';
  displayPlayerScore.textContent = `Score: ${playerScore}`;
  displayComputerScore.textContent = `Score: ${computerScore}`;

  // Reset sign images
  playerSignImage.src = 'images/Rock.png'
  computerSignImage.src = 'images/Rock.png'
});


function playRound(e) {
    const playerSelection = parseInt(e.target.id)
    console.log(e.target)
    // Change players sign
    playerSignImage.src = `images/${signs[playerSelection]}.png`;
    const computerSelection = getComputerChoice()

    // Check if either of players reached 5 points.
    if (playerSelection === 2 && computerSelection === 0) {
        incrementComputerScore(playerSelection, computerSelection);
    } else if (playerSelection === 0 && computerSelection === 2) {
        incrementPlayerScore(playerSelection, computerSelection);
    } else if (playerSelection > computerSelection) {
        incrementPlayerScore(playerSelection, computerSelection);
    } else if (playerSelection < computerSelection) {
        incrementComputerScore(playerSelection, computerSelection);
    } else {
        result.textContent = "It's a tie!";
    }
}

// returns random number
function getComputerChoice() {
    randomChoice = Math.floor(Math.random() * 3);
    computerSignImage.src = `images/${signs[randomChoice]}.png`
    return randomChoice;
}

function incrementPlayerScore(playerChoice, computerChoice) {
    playerScore++;
    displayPlayerScore.textContent = `Score: ${playerScore}`;
    result.textContent = `You Win! ${signs[playerChoice]} beats ${signs[computerChoice]}`;
}

function incrementComputerScore(playerChoice, computerChoice) {
    computerScore++;
    displayComputerScore.textContent = `Score: ${computerScore}`;
    result.textContent = `You Lose! ${signs[computerChoice]} beats ${signs[playerChoice]}`
}
