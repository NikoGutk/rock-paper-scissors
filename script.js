const rock = 0;
const paper = 1;
const scissors = 2;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomValue = Math.floor(Math.random() * 3);

  if (randomValue === 0) {
    console.log("Computer chose: Rock");
    return rock;
  } else if (randomValue === 1) {
    console.log("Computer chose: Paper");
    return paper;
  } else {
    console.log("Computer chose: Scissors");
    return scissors;
  }
}

function getHumanChoice () {
    const userInput = parseInt(prompt("Choose: 0 for Rock, 1 for Paper, 2 for Scissors"));

     if (userInput === rock) {
        console.log("You chose Rock");
        return rock;
    } else if (userInput === paper) {
        console.log("You chose Paper");
        return paper;
    } else if (userInput === scissors) {
        console.log("You chose Scissors");
        return scissors;
    } else {
         console.log("Invalid choice!");
         return null;
  }
}

function playRound (computerChoice, humanChoice) {
    if (computerChoice === humanChoice) {
        console.log("Draw")
    } else if ((computerChoice === rock && humanChoice === scissors) ||
              (computerChoice === paper && humanChoice === rock) ||
              (computerChoice === scissors && humanChoice === paper))    
              {
                console.log("Computer wins");
              } else {
                console.log("Human wins!");
              }
    }

function gameScore (computer, human) {
    if (computer === human) {
        return 0;
    }
    if ((human === rock && computer ===scissors) ||
        (human === paper && computer === rock) ||
        (human === scissors && computer === paper)) {
            return 1;
        } else {
            return -1;
        }
}
    


while (humanScore < 5 && computerScore < 5) {
    const computer = getComputerChoice();
    const human = getHumanChoice();
    if (human === null) continue;

    let result = gameScore(computer,human);
    if (result === 1) humanScore++;
    else if (result === -1) computerScore++;
    console.log(`Score — You: ${humanScore} | Computer: ${computerScore}`);

}

if (humanScore === 5) {
    console.log("You won the game!");
} else {
    console.log("Computer beat your ass!")
}
