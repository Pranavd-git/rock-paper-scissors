// This function will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function getComputerChoice() {
	let choices = ["Rock", "Paper", "Scissors"];
	//This will give random array index
	return choices[Math.floor(Math.random() * choices.length)];
}
//This function will play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
	if (playerSelection === "ROCK" && computerSelection === "PAPER") {
		return console.log("You Lose! Paper beats Rock");
	}
}

const playerSelection = "rock".toUpperCase();
const computerSelection = getComputerChoice().toUpperCase();
