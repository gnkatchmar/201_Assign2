var correct = 0;
var user = prompt("Please input your full name","")
alert("Hello, "+user+". Let's play a quick game.")   
  
var guess = prompt("Did I grow up in Oregon?", "Yes");
if ((guess.toLowerCase() == "y") || (guess.toLowerCase() == "yes")) {
  alert("Incorrect. I grew up in California.");
} else {
  alert("Correct! I grew up in California.");
  correct++;
}

var guess = prompt("Did I complete the PHP Development track at Treehouse?", "Yes");
  console.log("Guess: "+guess);
if ((guess.toLowerCase() == "y") || (guess.toLowerCase() == "yes")) {
  console.log("Guess was correct.");
  alert("Correct! I passed the PHP Development track at Treehouse.");
  correct++;
} else {
  console.log("Guess was incorrect.");
  alert("Incorrect. I passed the PHP Development track at Treehouse.");
}

var guess = prompt("Did I graduate from Napa High School?", "Yes");
if ((guess.toLowerCase() == "y") || (guess.toLowerCase() == "yes")) {
  alert("Incorrect. I graduated from Vintage High School.");
} else {
  alert("Correct! I graduated from Vintage High School.");
  correct++;
}

console.log("Start number game.");

numQuizDone = false;
numAttempts = 0;
while (numQuizDone == false) {
  var numGuess = prompt("Guess my favorite number. It is between 1 and 10:","");
  if (numGuess == 5) {
    console.log("Guess was correct.");
    alert("Yes! You guessed my favorite number (because I was born on Cinco de Mayo).");
    numAttempts++;
    numQuizDone = true;
  } else {
    console.log("Guess was incorrect.");
    numAttempts++;
    if (numGuess < 5) {
      alert("Too low; try again.")
    } else {
        alert("Too high; try again.")
    }
  }
}

alert(user+", you answered "+correct+" out of 3 biographical questions correctly and required "+numAttempts+" attempt(s) to guess my favorite number.")