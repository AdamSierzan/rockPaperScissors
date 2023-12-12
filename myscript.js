const getComputerChoice = () => {
  rockPaperScissors = ["rock", "paper", "scissors"];
  return (computerSelection =
    rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]);
};

var playerScore = 0;
var computerScore = 0;

const playRound = () => {
  var oponentSelection = getComputerChoice();
  var playerSelection = window.prompt("Choose: rock, paper or scissors");
  if (oponentSelection === playerSelection) {
    console.log("It's a draw");
  } else if (
    (oponentSelection === "rock" && playerSelection === "scissors") ||
    (oponentSelection === "scissors" && playerSelection === "paper") ||
    (oponentSelection === "paper" && playerSelection === "rock")
  ) {
    computerSelection++;
    console.log("Computer wins this round");
    return oponentSelection;
  } else {
    playerScore++;
    console.log("You win this round");
    return playerSelection;
  }
};

const game = () => {
  for (let start = 0; start < 5; start++) {
    playRound();
    // if (playerScore > computerScore) {
    //   console.log("You won!");
    // } else if (playerScore < computerScore) {
    //   console.log("Computer won!");
    // } else {
    //   console.log("It's a draw");
    // }
    // console.log("Computer chosen:", oponentSelection);
    // console.log("You chosen:", playerSelection);
  }
};

console.log(game());
if (playerScore > computerScore) {
  console.log("You won the game!");
} else if (playerScore < computerScore) {
  console.log("Computer won the game!");
} else {
  console.log("It's a draw, neither of you won!");
}
console.log("Computer score:", computerScore);
console.log("You score:", playerScore);
