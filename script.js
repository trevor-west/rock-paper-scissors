/* 
BUILDING getComputerChoice FUNCTION:
1. UNDERSTAND

First I will understand the instructions in the first main step from the project page (step 3 in https://www.theodinproject.com/lessons/foundations-rock-paper-scissors):
"Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!""

So I need to make a function called getComputerChoice that returns randomly 'Rock', 'Paper', or 'Scissors

2. PLAN
- No graphical interface is needed -- this will all be done in the console
- I could use Math.Random to associate 33% interval with each of the 3 values ('Rock', 'Paper', 'Scissors') and then use conditionals and boolean checks to return accordingly (randomly).
*/

// 3. PSEUDOCODE
//   1. Create three variables to store the random values precedents for 'Rock', 'Paper' and 'Scissors'
// let computerRock = 'Rock';
// let computerPaper = 'Paper';
// let computerScissors = 'Scissors';

// 2. Create a function to return a random number between 0 and 100.
function getRandomNumber() {
  let choice = Math.round(Math.random() * 100);
  return choice;
}

//   3. Create a function getComputerChoice to use the number generated in getRandomNumber to check against the variables for 'Rock', 'Paper', and 'Scissors' 
//      and return the value that meets the defined criteria
//     3a. This criteria could be if random value is between 0 and .32 then return Rock, if between .33 and .66 then return Paper, and if between .67 and 1 then return 
//       0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32 -- Rock
//       33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65 -- Paper 
//       66, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99 -- Scissors
//       100 -- repeat
//     3b. Print the resulting choice of Rock, Paper or Scissors to the console.

let computerChoice;

function getComputerChoice() {
  computerChoice = getRandomNumber();
  // console.log("computerChoice value: " + computerChoice);
  if(computerChoice == 100) {
    computerChoice = getRandomNumber();
  } else if(computerChoice >= 0 && computerChoice <= 32) {
    console.log("Computer's choice: Rock");
    computerChoice = 'rock';
    return computerChoice;
  } else if (computerChoice >= 33 && computerChoice <= 65) {
    console.log("Computer's choice: Paper");
    computerChoice = 'paper';
    return computerChoice;
  } else if (computerChoice >= 66 && computerChoice <= 99) {
    console.log("Computer's choice: Scissors");
    computerChoice = 'scissors';
    return computerChoice;
  } else {
    console.log("An unknown error has occurred.");
  }
}

// BUILDING getHumanChoice FUNCTION
// 1. UNDERSTAND
// Create the same code as getComputerChoice function but get the input by a prompt to the user. Same as getComputerChoice function, the getHumanChoice function will ultimately return the value Rock, Paper, or Scissors (minus the need
//   for creating a random number, so no need for the function getRandomNumber).

// 2. PLAN
// - All in console, no interface
// - Use the prompt method to get the given input from the user (either rock, paper, or scissors case insensitive -- if the user types anything else prompt again or return a message saying that isn't a valid entry)


// 3. PSEUDOCODE
//   1. Create variables to store human choice values
let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';

let humanChoice;

//   2. Create a function that runs a conditional check to ask the user to type again if they enter anything else
function getHumanChoice() {
  // Get input value from the user (either "Rock", "Papers" or "Scissors" as a string) and (make this case insensitive so you can type "rOck" and it works etc.)
  humanChoice = (prompt("Please enter either 'Rock', 'Paper', or 'Scissors' (case insensitive but you must type it exact letter-wise):", "Rock")).toLowerCase();
  // Conditional checks for humanChoice to determine Rock, Paper, or Scissors
  if (humanChoice == "rock") {
    console.log("Human choice: Rock");
    return rock;
  } else if (humanChoice == "paper") {
    console.log("Human choice: Paper");
    return paper;
  } else if (humanChoice == "scissors") {
    console.log("Human choice: Scissors");
    return scissors;
  } else if(humanChoice !== "rock" || humanChoice !== "paper" || humanChoice !== "scissors") {
    humanChoice = (prompt("Please enter either 'Rock', 'Paper', or 'Scissors' (case insensitive but you must type it exact letter-wise):", "Rock")).toLowerCase();
  } else {
    console.log("An unknown error has occurred.")
  }
}

// BUILDING rockPaperScissorsGame FUNCTION
// 1. UNDERSTAND
// 'Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner or tie of the round like so: 
// "You Lose! Paper beats Rock"

// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).'

// 2. PLAN
// - All in console, no interface
// - Use conditional checks in the rockPaperScissorsGame function to compare the given output values of getComputerChoice and getHumanChoice to output who wins the game.

// 3. PSEUDOCODE

//  0. Create variables to store human or computer win values
let humanWins = 0;
let computerWins = 0;

//  1. Create function rockPaperScissorsGame
function rockPaperScissorsGame() {
//  2. Run functions to get game values
  
  getHumanChoice(); // get humanChoice
  getComputerChoice(); // get computerChoice
//  3. Use conditional checks to compare whether getHumanChoice or getComputerChoice wins given the rules of rock, paper, scissors
//   if (humanChoice && computerChoice == 'rock' || humanChoice && computerChoice == 'paper' || humanChoice && computerChoice == 'scissors') {
//   console.log("Its a tie!");
  if (humanChoice == computerChoice) {
    return "Its a tie! Try again!";
  } else if (humanChoice == rock && computerChoice == scissors) {
    humanWins++;
    return "You win! Rock beats scissors!";
  } else if (computerChoice == scissors && humanChoice == scissors) {
    computerWins++;
    return "You lose! Rock beats scissors!";
  } else if (humanChoice == paper && computerChoice == rock) {
    humanWins++;
    return "You win! Paper beats rock!";
  } else if (computerChoice == paper && humanChoice == rock) {
    computerWins++;
    return "You lose! Paper beats rock!";
  } else if (humanChoice == scissors && computerChoice == paper) {
    humanWins++;
    return "You win! Scissors beats paper!";
  } else if (computerChoice == scissors && humanChoice == paper) {
    computerWins++;
    return "You lose! Scissors beats paper!";
  } else {
    return "An unknown error has occurred.";
  }
}

// BUIDLING playGame FUNCTION

// 1. UNDERSTAND
// Take the rockkPaperScissorsGame function and run it in a loop five times, track the score and then print at the end
// who won (human player or computer player).

// 2. PLAN
// - All in console, no interface
// - Use a traditional for loop alongside a unique variable for the human and computer score and then run a conditional
// check at the end to see who wins and return that result in the console.

// 3. PSEUDOCODE
//   1. Create a function called playGame with the variables humanScore and computerScore in the parentheses
function playGame(humanScore, computerScore) {
//   2. Create a for loop that starts at 0 and runs 5 times, repeating the rockPaperScissorsGame function each time 
//   and adding the results of each game loop to humanScore and/or computerScore
  for (let x = 0; x < 5; x++) {
    rockPaperScissorsGame();
  }
}


//   3. Return the result of the 5 rounds of game and print this is the console.
