// Rock Paper Scissors Game by nGendzo!

let i = 0;
let j = 0;

let playerSelection;

let rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper');
let scissorsBtn = document.querySelector('.scissors');

let score = document.querySelector('#round-text');
let playerScore = document.querySelector('#player-score');
let computerScore = document.querySelector('#computer-score');

rockBtn.addEventListener('click', rockFunction);

function rockFunction() {
    playerSelection = "rock";
    if (i == 4 || j == 4){
        winOrLoseAlert();
        return;
    }game();
}

paperBtn.addEventListener('click', paperFunction);

function paperFunction() {
    playerSelection = "paper";
    if (i == 4 || j == 4){
        winOrLoseAlert();
        return;
    }game();
}

scissorsBtn.addEventListener('click', scissorsFunction);

function scissorsFunction() {
    playerSelection = "scissors";
    if (i == 4 || j == 4){
        winOrLoseAlert();
        return;
    }game();
}

function winOrLoseAlert(){
    if (i == 4){
        score.textContent = 'Congrats! You Won The Game! Player Wins!';
        i = 0;
        j = 0;
        playerScore.textContent = 0;
        computerScore.textContent = 0;
    }else if (j == 4){
        score.textContent = 'Oops! You Lost The Game! Computer Wins!';
        i = 0;
        j = 0;
        playerScore.textContent = 0;
        computerScore.textContent = 0;
    }
}

function game() {

    let computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);

    if (playRound(playerSelection, computerSelection) == "Player Wins! Rock beats scissors.") {
        score.textContent = 'Player Wins! Rock beats scissors. +1 Point to player!';
        i += 1;
        playerScore.textContent = i;
    } else if (playRound(playerSelection, computerSelection) == "Player Wins! Paper beats rock.") {
        score.textContent = 'Player Wins! Paper beats rock. +1 Point to player!';
        i += 1;
        playerScore.textContent = i;
    }else if (playRound(playerSelection, computerSelection) == "Player Wins! Scissors beats paper") {
        score.textContent = 'Player Wins! Scissors beats paper. +1 Point to player!';
        i += 1;
        playerScore.textContent = i;
    }else if (playRound(playerSelection, computerSelection) == "Player Loses! Paper beats rock.") {
        score.textContent = 'Player Loses! Paper beats rock. +1 Point to computer.';
        j += 1;
        computerScore.textContent = j;
    }else if (playRound(playerSelection, computerSelection) == "Player Loses! Scissors beats paper.") {
        score.textContent = 'Player Loses! Scissors beats paper. +1 Point to computer.';
        j += 1;
        computerScore.textContent = j;
    }else if (playRound(playerSelection, computerSelection) == "Player Loses! Rock beats scissors.") {
        score.textContent = 'Player Loses! Rock beats scissors. +1 Point to computer.';
        j += 1;
        computerScore.textContent = j;
    }else score.textContent = 'Draw!';
}

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
        return "Player Loses! Scissors beats paper.";
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

