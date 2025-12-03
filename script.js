const rock = 0;
const paper = 1;
const scissors = 2;
let humanScore = 0;
let computerScore = 0;

const rock1 = document.getElementById("rock");
const paper1 = document.getElementById("paper");
const scissors1 = document.getElementById("scissors");
let results = document.getElementById("result");
let winner = document.getElementById("winner");


rock1.addEventListener("click", () => {
  const newComputerChoice = getComputerChoice();
  const humanChoice = 0;

  gameScore(newComputerChoice, humanChoice);
});

paper1.addEventListener("click", () => {
  const newComputerChoice = getComputerChoice();
  const humanChoice = 1;

  gameScore(newComputerChoice, humanChoice);
});

scissors1.addEventListener("click", () => {
  const newComputerChoice = getComputerChoice();
  const humanChoice = 2;

 gameScore(newComputerChoice, humanChoice);
});


function getComputerChoice() {
  const randomValue = Math.floor(Math.random() * 3);

  if (randomValue === 0) {
    console.log("Computer chose: Rock");
    return 0;
  } else if (randomValue === 1) {
    console.log("Computer chose: Paper");
    return 1;
  } else {
    console.log("Computer chose: Scissors");
    return 2;
  }
}


//function getHumanChoice () {
  //  const userInput = parseInt(prompt("Choose: 0 for Rock, 1 for Paper, 2 for Scissors"));

    // if (userInput === rock) {
      //  console.log("You chose Rock");
        //return rock;
    //} else if (userInput === paper) {
      //  console.log("You chose Paper");
        //return paper;
    //} else if (userInput === scissors) {
      //  console.log("You chose Scissors");
        //return scissors;
    //} else {
      //   console.log("Invalid choice!");
        // return null;
  //}
//}

//function playRound (getComputerChoice, getHumanChoice) {
  //  if (getComputerChoice === getHumanChoice) {
    //    console.log("Draw")
    //} else if ((getComputerChoice === rock && getHumanChoice === scissors) ||
      //        (getComputerChoice === paper && getHumanChoice === rock) ||
        //      (getComputerChoice === scissors && getHumanChoice === paper))    
          //    {
            //    console.log("Computer wins");
              //} else {
                //console.log("Human wins!");
              //}

              //results.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
    //}

function gameScore (computer, human) {
    if (computer === human) {
       winner.textContent = "It's a draw!";
    }
    else if ((human === 0 && computer === 2) ||
            (human === 1 && computer === 0) ||
            (human === 2 && computer === 1)) {
            humanScore++;
            winner.textContent = "Human wins the round!";
            }
    else {
            computerScore++;
            winner.textContent = "Computer wins the round!";
        }
        results.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;
        if (humanScore >= 5 || computerScore >= 5) {
        endGame(humanScore, computerScore);
    }
}

function endGame (humanScore, computerScore) {
  if (humanScore >= 5) {
    alert("Game Over, Human Wins!")
  } else if (computerScore >= 5){
    alert("Game over, Computer Wins!");
  }
  }



//while (humanScore < 5 && computerScore < 5) {
  //  const computer = getComputerChoice();
    //const human = getHumanChoice();
    //if (human === null) continue;

    //let result = gameScore(computer,human);
    //if (result === 1) humanScore++;
    //else if (result === -1) computerScore++;
    //console.log(`Score — You: ${humanScore} | Computer: ${computerScore}`);

//}

//if (humanScore === 5) {
  //  console.log("You won the game!");
//} else {
  //  console.log("Computer beat your ass!")
//}
