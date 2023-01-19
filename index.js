let playerSelection = prompt("Type your selection: Rock, Paper or Scissors!");
playerSelection = playerSelection.toLowerCase();

let computerSelection = getComputerChoice();

playRound(playerSelection, computerSelection);

function playRound(playerSelection, computerSelection) {

}

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);

    if (number == 0) {
        return "rock";
    }else if (number == 1) {
        return "paper";
    }else return "scissors";
}

