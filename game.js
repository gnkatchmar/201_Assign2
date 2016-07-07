var correct = 0;

function Quiz(question, answer, elaborate) {
  var guess = prompt(question, "Yes");
//  var first = guess.charAt(0);
  if ((guess.charAt(0).toLowerCase() === answer)) {
    document.getElementById("QuizContent").innerHTML += "<br>Correct! "+elaborate+"<br>";
    correct++;
  } else {
   document.getElementById("QuizContent").innerHTML += "<br>Incorrect! "+elaborate+"<br>";
  } 
}

function NumQuiz (){
  numQuizDone = false;
  numAttempts = 0;
  while (numQuizDone == false) {
    var numGuess = prompt("Guess my favorite number. It is between 1 and 10:","");
    if (numGuess == 5) {
      document.getElementById("QuizContent").innerHTML += "<br>Yes! You guessed my favorite number (because I was born on Cinco de Mayo).<br>";
      numAttempts++;
      numQuizDone = true;
    } else {
      numAttempts++;
      if (numGuess < 5) {
        document.getElementById("QuizContent").innerHTML += "<br>Too low; try again.<br>";
      } else {
        document.getElementById("QuizContent").innerHTML += "<br>Too high; try again.<br>";
      }
    }
  }  
}

function playGame() {
  document.getElementById("QuizStart").innerHTML = "Quiz Time!";
  var user = prompt("Please input your name","");
  document.getElementById("QuizContent").innerHTML = "\nHello, "+user+". Let's play a quick game.<br>";

  Quiz("Did I grow up in Oregon?", "n", "I grew up in California.");
  Quiz("Did I complete the PHP Development track at Treehouse?", "y", "I passed the PHP Development track at Treehouse.");
  Quiz("Did I graduate from Napa High School?", "n", "I graduated from Vintage High School.");

  NumQuiz(5);

  document.getElementById("QuizContent").innerHTML += "<br>"+user+", you answered "+correct+" out of 3 biographical questions correctly and required "+numAttempts+" attempt(s) to guess my favorite number.";
}

