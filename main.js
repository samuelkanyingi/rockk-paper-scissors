let humanScore = 0
let computerScore = 0

function getComputerChoice() {    
    let choice = Math.floor(Math.random() * 3)
    if (choice == 0) {
        return "rock"
    }
    else if(choice == 1) {
        return "paper"
    }
    else if (choice == 2){
        return "scissors"
    }
}


function getHumanChoice() {
    choice = prompt("Enter your choice")
    choices = choice.toLowerCase()
    if (choices == 'rock') {
        return "rock"
    }
    else if (choices == "paper") {
        return "paper"
    }
    else if (choices == "scissors"){
        return "scissors"
    }
}


function playGame() {
    function playRound(humanChoice, computerChoice) {
        console.log(humanChoice, computerChoice)
        if (humanChoice == "rock" && computerChoice == "scissors") {
            humanScore+=1;
            return "You win! Rock beats scissors";
        }
        else if (humanChoice == "rock" && computerChoice == "paper") {
            computerScore+=1
            return "You lose! paper beats rock"
        }
        else if (humanChoice == "paper" && computerChoice == "rock") {
            humanScore+=1;
            return "You win!paper beats rock"
        }
        else if (humanChoice == "paper" && computerChoice == "scissors") {
            computerScore += 1;
            return "You lose! scissors beats paper"
        }
        else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanScore += 1;
            return "You win! Scissors beats paper";
        }
        else if(humanChoice == "rock" && computerChoice == "rock" 
            || humanChoice == "paper" && computerChoice == "paper"
            || humanChoice == "scissors" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "rock")
        {
            return "draw";
        }
    }


    
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    
    if (humanScore > computerScore) {
        console.log(humanScore, computerScore);
        return "human wins";
    }
    else if (computerScore > humanScore) {
        console.log(humanScore, computerScore);
        return "computer wins";
    }
    else {
        console.log(humanScore, computerScore)
        return "It's a tie";
    }
    
}
console.log(playGame());