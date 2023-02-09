// random(a,b) per generare un numero tra a e b
// creare una funzione per cui if a, b, c
// console.log rock paper o scissors
// function getComputerChoice
// return "rock" "paper" or "scissors" RANDOMLY

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice() {
    let randomElement = getRandomNumber(1, 3);
    if (randomElement === 1) {
        return "rock";
    }
    else if (randomElement === 2) {
        return "paper";
    }
    else if (randomElement === 3) {
        return "scissors";
    }
    }

let playerSelection;
playerSelection = playerSelection.toLowerCase();
let winner = "You won! ";
let loser = "You lost! ";
let playerScore = 0; // punteggio player
let computerScore = 0; // punteggio pc

function playRound(playerSelection, computerChoice) {
    playerSelection = prompt("Rock, paper, scissors!");
    if (playerSelection == computerChoice) {
        playerScore += 0;
        computerScore += 0;
        return ("That's a tie!");
    }
    else if (playerSelection == "rock" && computerChoice == "paper") {
        computerScore += 1;
        return (loser + "Paper beats rock");
    }
    else if (playerSelection == "scissors" && computerChoice == "paper") {
        playerScore += 1;
        return (winner + "Scissors beats paper");
    }
    else if (playerSelection == "rock" && computerChoice == "scissors") {
        playerScore += 1;
        return (winner + "Rock beats scissors");
    }
    else if (playerSelection == "paper" && computerChoice == "scissors") {
        computerScore += 1;
        return (loser + "Scissors beats paper");
    }
    else if (playerSelection == "scissors" && computerChoice == "rock") {
        computerScore += 1;
        return (loser + "Rock beats scissors");
    }
    else if (playerSelection == "paper" && computerChoice == "rock") {
        playerScore += 1;
        return (winner + "Paper beats rock");
    }
    else {
        return ("You spelt it wrong! Restart the game.");
    }

}
// let result = playRound(playerSelection, computerChoice);
// console.log(result);

function game() {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let round = playRound(playerSelection, computerChoice);
        console.log(round);
    }
}
function scoreResult(){
    game();
    if (playerScore > computerScore) {
        console.log("You won the game");
    }
    else if (computerScore > playerScore) {
        console.log("You lost the game");
    }
}

scoreResult();
