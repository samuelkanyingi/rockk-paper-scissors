let humanScore = 0
let computerScore = 0

let button1= document.querySelector('.btn1')
let button2= document.querySelector('.btn2')
let button3= document.querySelector('.btn3')
let val1 = btn1.value;
let val2 = btn2.value;
let val3 = btn3.value;

button1.addEventListener('click', ()=> {
    playRound(getComputerChoice(), getHumanChoice(val1))
    if (humanScore > 4 || computerScore > 4) {
        console.log(humanScore, computerScore);
        document.getElementById("demo").innerHTML = "human wins";
        console.log("human wins");
    }
    else if (computerScore  > 4 || humanScore > 4) {
        console.log(humanScore, computerScore);
        document.getElementById("demo").innerHTML = "computer wins";
    }
    else {
        console.log(humanScore, computerScore)
        document.getElementById("demo").innerHTML = "humanScore " + humanScore+ " computerScore "+ computerScore;
    }
})

button2.addEventListener('click', ()=> {
    playRound(getComputerChoice(), getHumanChoice(val2))
    if (humanScore > 4 || computerScore > 4) {
        console.log(humanScore, computerScore);
        document.getElementById("demo").innerHTML = "human wins";
        console.log("human wins");
    }
    else if (computerScore  > 4 || humanScore > 4) {
        console.log(humanScore, computerScore);
        document.getElementById("demo").innerHTML = "computer wins";
       
    }
    else {
        console.log(humanScore, computerScore)
        document.getElementById("demo").innerHTML = "humanScore " + humanScore+ " computerScore "+ computerScore;
    }
})

button3.addEventListener('click', ()=> {
    playRound(getComputerChoice(), getHumanChoice(val3))
    if (humanScore > 4 || computerScore > 4) {
        console.log(humanScore, computerScore);
        document.getElementById("demo").innerHTML = "human wins";
        console.log("human wins");
    }
    else if (computerScore  > 4 || humanScore > 4) {
        console.log(humanScore, computerScore);
        document.getElementById("demo").innerHTML = "computer wins";
    }
    else {
        console.log(humanScore, computerScore)
        document.getElementById("demo").innerHTML = "humanScore " + humanScore+ " computerScore "+ computerScore;
    }
})

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


function getHumanChoice(choices) {
    if (choices == 'rock') {
        return document.getElementById("demo").innerHTML = "rock";
    }
    else if (choices == "paper") {
        return document.getElementById("demo").innerHTML = "paper";
    }
    else if (choices == "scissors"){
        return document.getElementById("demo").innerHTML = "scissors";
    }
}

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