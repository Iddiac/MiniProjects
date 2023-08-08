const prompt = require("prompt-sync")();
const answer = prompt("would you like to play (y/n)? ");

if (answer.toLowerCase() === "y") {
  const answer2 = prompt(
    "Would you like to go left or go right (left/right)? "
  );
  if (answer2.toLowerCase() === "left") {
    console.log("Oops, you go left and get eaten by a tiger!");
  } else {
    //right
    console.log("You go right and approach a bridge ...");
    const answer3 = prompt(
      "would you like to give some gold to the troll under the bridge or attempt to kill him? (gold/kill)? "
    );
    if(answer3.toLowerCase() === "gold"){
        console.log("you had no gold so you give him all of your posessions and safely cross!")
        const answer4 = prompt("You walk for a while and find 2 paths, One leads to a cave and the other into the forest. What will you choose? (cave/forest) ? ")
        if(answer4.toLowerCase() === "forest"){
            console.log("you get eaten by a wolf");
        }else{
            console.log("You pick up a wodden stick and walk into the cave")

        }
    } else {
        console.log("you charge at the toll while praying to your mom and then get crushed by his foot... you died! ")
    }
  }
} else {
  console.log("that's too bad!");
}

console.log("....Email Ujjwaladhikari.code@gmail.com for a sequel....")
