const getComputerChoice = () => {
  const rockPaperScissors = ["rock", "paper", "scissors"];
  return (computerSelection =
    rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]);
};

let playerScore = 0;
let computerScore = 0;

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const playRound = () => {
  const oponentSelection = getComputerChoice();
  const playerSelection = window.prompt("Choose: rock, paper or scissors");

  if (oponentSelection === playerSelection) {
    console.log("It's a draw");
  } else if (
    (oponentSelection === ROCK && playerSelection === SCISSORS) ||
    (oponentSelection === SCISSORS && playerSelection === PAPER) ||
    (oponentSelection === PAPER && playerSelection === ROCK)
  ) {
    computerSelection++;
    console.log("Computer wins this round");
  } else {
    playerScore++;
    console.log("You win this round");
  }
};

const playGame = () => {
  for (let start = 0; start < 5; start++) {
    playRound();
  }
};

playGame();

if (playerScore > computerScore) {
  console.log("You won the game!");
} else if (playerScore < computerScore) {
  console.log("Computer won the game!");
} else {
  console.log("It's a draw, neither of you won!");
}

console.log("Computer score:", computerScore);
console.log("You score:", playerScore);
