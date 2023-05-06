// This function will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function getComputerChoice() {
	let choices = ["Rock", "Paper", "Scissors"];
	//This will give random array elements
	return choices[Math.floor(Math.random(choices.length) * 3)].toUpperCase();
}
//These are helper variables and function to keep track of score and return the winner
let playerScore = 0;
let computerScore = 0;
function scoreKeeper(){
   console.log(`%cPlayer Score: ${playerScore}`, "color: #7733ff;");
	console.log(`%cComputer Score: ${computerScore}`, "color: #ff3300;");
	if (playerScore > computerScore){
		return console.log("%cPlayer is the winner!", "background: green; color: white; display: block;");
	}
	else if  (computerScore > playerScore){
		return console.log("%cComputer is the winner!", "background: green; color: white; display: block;"); 
	}
	else {
		return console.log("%cIt's a Tie!", "background: green; color: white; display: block;");
	}
};
//This function will play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
	if (playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS"){
        if (playerSelection === "ROCK" && computerSelection === "PAPER"){
            computerScore++;
            return "Computer Wins! Paper beats Rock";
         }
         else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
            playerScore++;
            return "You Win! Paper beats Rock";
         }
          else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
            computerScore++;
            return "Computer Wins! Scissors beats Paper";
         }
         else if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
            playerScore++;
            return "You Win! Scissors beats Paper";
         }
         else if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
            playerScore++;
            return "You Win! Rock beats Scissors";
         }
         else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
            computerScore++;
            return "Computer Wins! Rock beats Scissors";
         }
         else {
             return "Draw";
         }}
         else {
            return "Enter valid input."}
}
let userInput = prompt("Please enter your choice: ", "Rock");
const playerSelection = userInput.toUpperCase();
//This passes random values to computerSelection 
const computerSelection = () => getComputerChoice();

//This function will play 5 rounds of the game

function game(){
    for(let i =0; i < 5; i++){
     console.log(playRound(playerSelection, computerSelection()));
    }
    scoreKeeper();
}
game();
