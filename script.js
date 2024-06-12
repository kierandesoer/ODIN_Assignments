

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// get the computer choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[getRandomInt(3)];
}

// get the human choice
function getHumanChoice() {
    humanChoice = prompt("Please choose Rock, Paper or Scissors");
    return humanChoice;
}


function playGame() {
    
    function playRound(humanChoice, computerChoice) {
    
        console.log("You chose " + humanChoice + ", the computer chose " + computerChoice);
    
        switch (humanChoice.toLowerCase()) {
            case 'rock':
                if (computerChoice === "rock") {
                    console.log("That's a draw")
                } 
                if (computerChoice === "paper") {
                    console.log("You lose!")
                    computerScore++;
                }
                if (computerChoice === "scissors") {
                    console.log("Congratualtions! You win!")
                    humanScore++;
                } 
                break;
            case 'paper':
                if (computerChoice === "rock") {
                    console.log("Congratualtions! You win!")
                } 
                if (computerChoice === "paper") {
                    console.log("That's a draw")
                    humanScore++;
                }
                if (computerChoice === "scissors") {
                    console.log("You lose!")
                    computerScore++;
                } 
                break;
            case 'scissors':
                if (computerChoice === "rock") {
                    console.log("You win that round!")
                    humanScore ++;
                } 
                if (computerChoice === "paper") {
                    console.log("You lose!")
                   computerScore++;
                }
                if (computerChoice === "scissors") {
                    console.log("That's a draw")
                } 
                break;
            default:
                console.log("You haven't made a valid choice!")
                break;
        }
        
    }

let humanScore = 0;
let computerScore = 0;

for (i=1; i<=5; i++) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(humanSelection, computerSelection);
}
console.log("You won " + humanScore + " rounds");
console.log("The computer won " + computerScore + " rounds");
console.log("there were " + (5-computerScore-humanScore) + " draws")

if (humanScore === computerScore ) {
    console.log("It was a draw overall!");
} else if (humanScore > computerScore) {
    console.log("Congratulations, you're a winner!");
} else {
    console.log("Better luck next time!");
}
}

playGame();