let playerSelection = prompt("Type your selection: Rock, Paper or Scissors!");
playerSelection = playerSelection.toLowerCase();

let computerSelection = getComputerChoice();



function playRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "Player Wins! Rock beats scissors.";
    }else if (playerSelection == "rock" && computerSelection == "paper") {
        return "Player Loses! Paper beats rock.";
    }else if (playerSelection == "rock" && computerSelection == "rock") {
        return "Draw!";
    }

    if (playerSelection == "paper" && computerSelection == "rock") {
        return "Player Wins! Paper beats rock.";
    }else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "Player Loses! Scissors beats paper."
    }else if (playerSelection == "paper" && computerSelection == "paper") {
        return "Draw!";
    }

    if (playerSelection == "scissors" && computerSelection == "paper") {
        return "Player Wins! Scissors beats paper";
    }else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "Player Loses! Rock beats scissors.";
    }else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return "Draw!";
    }
}

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);

    if (number == 0) {
        return "rock";
    }else if (number == 1) {
        return "paper";
    }else return "scissors";
}

