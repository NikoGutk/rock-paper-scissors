const rock = 0;
const paper = 1;
const scissors = 2;

function getComputerChoice () {
    randomValue = Math.floor(Math.random() * 3);
    if (randomValue === 0) {
        randomValue = "Rock";
        console.log(randomValue);
        return randomValue;
    } else if (randomValue === 1) {
        randomValue = "Paper";
        console.log(randomValue);
        return randomValue;
    } else (randomValue === 2)
        randomValue = "Scissors";
        console.log(randomValue);
        return randomValue;
    }

function getHumanChoice () {
    const userInput = parseInt(prompt("Choose: 0 for Rock, 1 for Paper, 2 for Scissors"));
     if (userInput === rock) {
    console.log("You chose Rock");
    return "Rock";
  } else if (userInput === paper) {
    console.log("You chose Paper");
    return "Paper";
  } else if (userInput === scissors) {
    console.log("You chose Scissors");
    return "Scissors";
  } else {
    console.log("Invalid choice!");
    return null;
  }
}

function playRound (getComputerChoice, getHumanChoice) {
    if (getComputerChoice === getHumanChoice) {
        console.log("Draw");
        return "Draw";
    } else if (getComputerChoice === 0 && getHumanChoice === 1) {
        console.log("Computer wins");
        return "Computer wins";
    }
}
    

getComputerChoice();
getHumanChoice();
playRound();