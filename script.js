
const choices = ["rock", "paper", "scissors"];

let getComputerChoice = () => choices[Math.floor(Math.random() * 3)];

let getHumanChoice = () => {
    let result = prompt("Please choose Rock, Paper or Scissors");
    
    result = result.toLocaleLowerCase();

    if (choices.includes(result)) {
        return result;
    } else {
        alert(result + " is not a valid option! Please try again")
        return getHumanChoice();
    }
}



function playGame() {
    
    function playRound(humanChoice, computerChoice) {
    
        console.log("You chose " + humanChoice + ", the computer chose " + computerChoice);
        
        if (computerChoice === humanChoice) {
            console.log("That was a draw!");
            return;
        }

        const winningConditions = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper",
        };

        if (computerChoice === winningConditions[humanChoice]) {
            console.log("You won that round!");
            humanScore++;
        }else {
            console.log("The computer won that round!");
            computerScore++;
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