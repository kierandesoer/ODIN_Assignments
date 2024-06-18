// initialize variables and functions 
const choices = ["rock", "paper", "scissors"];

const winningConditions = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
};

let humanChoice = '';
let humanScore = 0;
let computerScore = 0;

let getComputerChoice = () => choices[Math.floor(Math.random() * 3)];

// set up buttons
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = button.id.toLowerCase();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});

// set up score display
const resultsDiv = document.querySelector("#results");
const humanResults = document.createElement("div");
const computerResults = document.createElement("div");
resultsDiv.appendChild(humanResults);
resultsDiv.appendChild(computerResults);

humanResults.textContent = "Your Score: " + humanScore;
computerResults.textContent = "Computer Score: " + computerScore;


let playRound = (humanChoice, computerChoice) => {
    
    let message = "";

    if (humanScore != 5 && computerScore != 5){
        message = "You chose " + humanChoice + ", the computer chose " + computerChoice;
        
        if (humanChoice === computerChoice) {
            message = message + "\nThat was a draw!";
        } else if ( computerChoice === winningConditions[humanChoice] ) {
            message = message + "\nYou win!";
            humanScore++;
        } else {
            message = message + "\nYou lose!"
            computerScore++;
        }
        alert(message);
    }

    if (humanScore === 5 || computerScore === 5) {
        // update alert with winner/loser message
        message = (humanScore > computerScore ? "Congratualtions, You won!" : "Better luck next time!");
        message = message + "\nDo you want to reset the game?";
        if (confirm(message)){
            resetGame();
        };   
    }

    humanResults.textContent = "Your Score: " + humanScore;
    computerResults.textContent = "Computer Score: " + computerScore;   
}

let resetGame = () => {
    humanScore = 0;
    computerScore = 0;
}
