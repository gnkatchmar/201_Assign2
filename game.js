var correct = 0;
var cancelled = "N";
var question1 = ["Did I grow up in Oregon?", "n", "I grew up in California."]
var question2 = ["Did I complete the PHP Development track at Treehouse?", "y", "I passed the PHP Development track at Treehouse."]
var question3 = ["Did I graduate from Napa High School?", "n", "I graduated from Vintage High School."]

function GetUser() {
  user = prompt("Please input your name:","");
  if (user != null) {
    return user;
  } else {
    return "";
  }
}

function Quiz(question) {
  var guess = prompt(question[0], "Yes");
  if (guess != null) {
    if ((guess.charAt(0).toLowerCase() === question[1])) {
      document.getElementById("QuizContent").innerHTML += "<br /><img src=IMG/Brain.jpg>";
      document.getElementById("QuizContent").innerHTML += "<font color='blue'> Correct! "+question[2]+"<br /></font>";
      correct++;
    } else {
      document.getElementById("QuizContent").innerHTML += "<br /><img src=IMG/Pinky.jpg>";
      document.getElementById("QuizContent").innerHTML += "<font color='red'> Incorrect! "+question[2]+"<br /></font>";
    }      
  } else {
    Cancel();
  }   
}

function NumQuiz () {
  numQuizDone = false;
  numAttempts = 0;
  while (numQuizDone == false) {
    var numGuess = prompt("Guess my favorite number. It is between 1 and 10:","");
    if (numGuess != null) {
      if (numGuess == 5) {
        document.getElementById("QuizContent").innerHTML += "<br />Yes! You guessed my favorite number (because I was born on Cinco de Mayo).<br />";
        numAttempts++;
        numQuizDone = true;
      } else {
        numAttempts++;
        if (numGuess < 5) {
          document.getElementById("QuizContent").innerHTML += "<br />Too low; try again.<br />";
        } else {
          document.getElementById("QuizContent").innerHTML += "<br />Too high; try again.<br />";
        } // numGuess not 5
      } numGuess = 5
    } else {
      numQuizDone = true;
      Cancel();
    } //if numGuess not Null
  }  //while quiz not completed
}

function Cancel() {
  document.getElementById("QuizContent").innerHTML += "<br />The game was cancelled.";
  cancelled = "Y";
}

function playGame() {
  document.getElementById("QuizStart").innerHTML = "Quiz Time!";
  GetUser();
  if (user != null) {
    document.getElementById("QuizContent").innerHTML = "\nHello, "+user+". Let's play a quick game.<br />";
    Quiz(question1);
    if (cancelled != "Y") {
      // if more than three questions, I would replace the following with a loop
      Quiz(question2);
    }
    if (cancelled != "Y") {
      Quiz(question3);  
    }
    if (cancelled != "Y") {
      NumQuiz(5);  
    }
    if (cancelled != "Y") {
      if (correct > 2) {
        cmt = "Brain wants you to help him take over the world!"
      } else {
        cmt = 'Pinky laughs and says "Narf!!!"'
      }
      
      document.getElementById("QuizContent").innerHTML += "<br />"+user+", you answered "+correct+" out of 3 biographical questions correctly and required "+numAttempts+" attempt(s) to guess my favorite number. "+cmt;
    }
  } else {
    Cancel();
  }
}
