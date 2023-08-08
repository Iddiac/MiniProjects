const prompt = require("prompt-sync")();

const target = 10 + Math.round(Math.random() * 90); // round the random 0-1 number to the nearest whole number then make the minimum 10 and the maximum 100

let guesses = 0;

while (true) {
  guesses++;

  let guess = Number(prompt("Guess the number (10-100): ")); // Changes the resulting string to a number
  if (guess > target) {
    console.log("Your guess is too high.");
  } else if (guess < target) {
    console.log("Your guess is too low.");
  } else {
    console.log("Correct!");
    break;
  }
}

console.log(`You guessed the number in ${guesses} tries!`)
