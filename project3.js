const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;

while (true) {
  const playerChoice = prompt("Enter rock, paper or scissors (or q to quit): ");
  if (playerChoice.toLowerCase() === "q") {
    break;
  }

  if (
    playerChoice !== "rock" &&
    playerChoice !== "paper" &&
    playerChoice !== "scissors"
  ) {
    console.log("enter a valid choie");
    continue; // repeats the while loop again until they enter a valid choice
  }

  const choices = ["rock", "paper", "scissors"]; // put computer choices in an array
  const randomIndex = Math.round(Math.random() * 2); // create the random index number to check array values
  const computerChoice = choices[randomIndex]; // gets an answer from the array

  console.log("The computer chose: ", computerChoice);

  if (computerChoice === playerChoice) {
    console.log("Draw");
    ties++;
  } else if (
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("Won!");
    wins++;
  } else {
    console.log("Lost!");
    losses++;
  }
}

console.log(`Wins : ${wins}, Losses : ${losses}, Ties : ${ties}`)
