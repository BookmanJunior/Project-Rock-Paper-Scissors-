const signs = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelector('.signs');
const result = document.querySelector('.result h3');

// Event listeners
buttons.addEventListener('click', playRound);


// returns random number 
function getComputerChoice() {
    randomChoice = Math.floor(Math.random() * 3);
    return randomChoice;
}


function playRound(e) {
    const playerSelection = e.target.id;
    const computerSelection = getComputerChoice();
    
    // If either selection is greater than the other selection they win. Except in a few cases.
    if (playerSelection === 2 && computerSelection === 0) {
        computerScore++;
        result.textContent = `You Lose! ${signs[computerSelection]} beats ${signs[playerSelection]}`;
    } else if (playerSelection === 0 && computerSelection === 2) {
        playerScore++;
        result.textContent =  `You Win! ${signs[playerSelection]} beats ${signs[computerSelection]}`;
    } else if (playerSelection > computerSelection) {
        playerScore++
        result.textContent =  `You Win! ${signs[playerSelection]} beats ${signs[computerSelection]}`;
    } else if (playerSelection < computerSelection) {
        computerScore++;
        result.textContent = `You Lose! ${signs[computerSelection]} beats ${signs[playerSelection]}`;
    } else {
        result.textContent = "It's a tie!";
    }

};

// Remove for now.
// function game() {
//     for (i = 0; i < 5; i++) {
//         console.log(playRound())
//     }
//     if (computerScore > playerScore) {
//         console.log("Computer wins in the best of 5!")
//     } else {
//         console.log("You win in the best of 5!")
//     }
// }


