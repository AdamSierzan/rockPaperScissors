const getComputerChoice = () => {
  rockPaperScissors = ["rock", "paper", "scissors"];
  return (computerSelection =
    rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]);
};

console.log(getComputerChoice());

const  playRound = (playerSelection, computerSelection) => {
  if (computerSelection === playerSelection) return "It's a draw";
  else if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "scissors" && playerSelection === "paper") ||
    (computerSelection === "paper" && playerSelection === "rock")
  )
    return "Computer wins";
  else return "Player wins";
}

const playerSelection = "rock";
// const computerSelection = getComputerChoice();
cons
console.log(playRound(playerSelection, computerSelection));



function game
