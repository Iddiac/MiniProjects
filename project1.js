const prompt = require("prompt-sync")(); // allows for user input in terminal

let correctAnswers = 0;

const totalQuestions = 3;

console.log("Welcome to the Ujjwal's Interview Quiz!");

let answer1 = prompt("What is Ujjwal's favorite framework? "); // sets user input to variable

const correctAnswer1 = "REACT";

if (answer1.toUpperCase() === correctAnswer1) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong :( ");
}
// Second Question
let answer2 = prompt("What is Ujjwal's favorite food? ");

const correctAnswer2 = "CURRY";

if (answer2.toUpperCase() === correctAnswer2) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong :( ");
}
// third Question
let answer3 = prompt("what coding school did Ujjwal go through? ");

const correctAnswer3 = "EDA";

if (answer3.toUpperCase() === correctAnswer3) {
  console.log("You got it correct!");
  correctAnswers++;
} else {
  console.log("You got it wrong :( ");
}

const percent = Math.round((correctAnswers / totalQuestions) * 100);

console.log(`You got ${correctAnswers} questions correct!`);
console.log(`You score ${percent}%`);
