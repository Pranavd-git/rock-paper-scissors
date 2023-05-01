// This function will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function getComputerChoice(){
    let choices = ["Rock", "Paper" , "Scissors"];
    //This variable will give random array index
    let randomChoice = Math.floor(Math.random()*choices.length);
    //This will return array value from above random array index 
    choices = choices[randomChoice];
    return choices;
}
//This function will play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    
  }

  const playerSelection = "rock".toUpperCase();
  const computerSelection = getComputerChoice().toUpperCase();