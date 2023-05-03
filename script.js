// This function will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function getComputerChoice() {
	let choices = ["Rock", "Paper", "Scissors"];
	//This will give random array elements
	return choices[Math.floor(Math.random(choices.length) * 3)].toUpperCase();
}
//These are helper variables and function to keep track of score and return the winner
let playerScore = 0;
let computerScore = 0;
let scoreKeeper = () =>{};
//This function will play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
	if (playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS"){
        if (playerSelection === "ROCK" && computerSelection === "PAPER"){
            return "You Lose! Paper beats Rock";
         }
         else if (playerSelection === "PAPER" && computerSelection === "ROCK"){
            return "You Win! Paper beats Rock";
         }
          else if (playerSelection === "PAPER" && computerSelection === "SCISSORS"){
            return "You Lose! Scissors beats Paper";
         }
         else if (playerSelection === "SCISSORS" && computerSelection === "PAPER"){
            return "You Win! Scissors beats Paper";
         }
         else if (playerSelection === "ROCK" && computerSelection === "SCISSORS"){
            return "You Win! Rock beats Scissors";
         }
         else if (playerSelection === "SCISSORS" && computerSelection === "ROCK"){
            return "You Lose! Rock beats Scissors";
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
const computerSelection = () => (getComputerChoice().toUpperCase());

function game(){
    for(let i =0; i < 5; i++){
     console.log(playRound(playerSelection, computerSelection()));
    }
}
game();
