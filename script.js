
const choices = ["rock", "paper", "scissors"];

let getComputerChoice = () => choices[Math.floor(Math.random() * 3)];

let humanChoice = '';

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        humanChoice = button.id.toLowerCase();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});

const resultsDiv = document.querySelector("#results");
const computerResults = document.createElement("span");
const humanResults = document.createElement("span");
resultsDiv.appendChild(computerResults);
resultsDiv.appendChild(humanResults);

// function playGame() {
    
let humanScore = 0;
humanResults.textContent = "Your Score: " + humanScore;

let computerScore = 0;
computerResults.textContent = "Computer Score: " + computerScore;

function playRound(humanChoice, computerChoice) {


    if (humanScore != 5 && computerScore != 5 ) {

        console.log("You chose " + humanChoice + ", the computer chose " + computerChoice);

        const winningConditions = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper",
        };

        if (computerChoice === winningConditions[humanChoice]) {
            alert("You won that round!");
        humanScore++;
        }else if (computerChoice !== humanChoice ) {
            alert("The computer won that round!");
        computerScore++;
        }
    } else {
        alert(humanScore > computerScore ? "Congratualtions, You won!" : "Better luck next time!");
    }
}

