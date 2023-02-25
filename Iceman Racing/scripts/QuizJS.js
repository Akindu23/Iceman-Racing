//When Start Quiz button clicked by user hides the instructions and shows questions and timer
function start() {
   document.getElementById("quiz-info").style.display = "none";
   document.getElementById("quiz-form").style.display = "block";
   document.getElementById("timer").style.display = "block";
}

//Initialising variables to store answers and calculate total.
let totalScore;
let correctScore = 0;
let incorrectScore = 0;
let result = [];
let output;

//Using getRadioValue function mentioned in lecture notes.
function getRadioValue(radioArray) {
   for (let i = 0; i < radioArray.length; i++) {
      if (radioArray[i].checked) {
         return radioArray[i].value;
      }
   }
   return "";
}

function displayResults() {
   //Comparing the selected answers with correct ones
   if (getRadioValue(document.quiz.q1) == 4) {
      correctScore += 2;
      result[0] = "Correct";
   }
   else {
      incorrectScore += 1;
      result[0] = "Incorrect";
   }
   if (getRadioValue(document.quiz.q2) == 3) {
      correctScore += 2;
      result[1] = "Correct";
   }
   else {
      incorrectScore += 1;
      result[1] = "Incorrect";
   }
   if (getRadioValue(document.quiz.q3) == 2) {
      correctScore += 2;
      result[2] = "Correct";
   }
   else {
      incorrectScore += 1;
      result[2] = "Incorrect";
   }
   if (getRadioValue(document.quiz.q4) == 1) {
      correctScore += 2;
      result[3] = "Correct";
   }
   else {
      incorrectScore += 1;
      result[3] = "Incorrect";
   }
   if (getRadioValue(document.quiz.q5) == 1) {
      correctScore += 2;
      result[4] = "Correct";
   }
   else {
      incorrectScore += 1;
      result[4] = "Incorrect";
   }
   if (getRadioValue(document.quiz.q6) == 2) {
      correctScore += 2;
      result[5] = "Correct";
   }
   else {
      incorrectScore += 1;
      result[5] = "Incorrect";
   }
   if (getRadioValue(document.quiz.q7) == 3) {
      correctScore += 2;
      result[6] = "Correct";
   }
   else {
      incorrectScore += 1;
      result[6] = "Incorrect";
   }
   if (getRadioValue(document.quiz.q8) == 4) {
      correctScore += 2;
      result[7] = "Correct";
   }
   else {
      incorrectScore += 1;
      result[7] = "Incorrect";
   }
   if (getRadioValue(document.quiz.q9) == 2) {
      correctScore += 2;
      result[8] = "Correct";
   }
   else {
      incorrectScore += 1;
      result[8] = "Incorrect";
   }
   if (getRadioValue(document.quiz.q10) == 3) {
      correctScore += 2;
      result[9] = "Correct";
   }
   else {
      incorrectScore += 1;
      result[9] = "Incorrect";
   }

   //Counting the total score
   totalScore = correctScore - incorrectScore;
   displayScore();
}

//This function stores the results in order to display after user submits quiz
function displayScore() {
   output = "You Have Scored = " + totalScore;

   let one     = "Question 01 : Your Answer is " + result[0];
   let two     = "Question 02 : Your Answer is " + result[1];
   let three   = "Question 03 : Your Answer is " + result[2];
   let four    = "Question 04 : Your Answer is " + result[3];
   let five    = "Question 05 : Your Answer is " + result[4];
   let six     = "Question 06 : Your Answer is " + result[5];
   let seven   = "Question 07 : Your Answer is " + result[6];
   let eight   = "Question 08 : Your Answer is " + result[7];
   let nine    = "Question 09 : Your Answer is " + result[8];
   let ten     = "Question 10 : Your Answer is " + result[9];

   document.getElementById("results").style.display = "block";

   let timeCount = "Time Taken: " + timeElapsed + " Seconds ";

   //Displaying if the answers are correct or incorrect  
   document.getElementById("results").innerHTML = 
   output + "<br>" + timeCount + "<br><br>" + one + "<br>" + two + "<br>" + three + "<br>" + 
   four + "<br>" + five + "<br>" + six + "<br>" + seven + "<br>" + eight + "<br>" + nine +
   "<br>" + ten + "<br>";

   //Depending on the total score the backgrouund color will be changed
   if (totalScore > 15) {
      document.getElementById("background").style.backgroundColor = "#00594f";
   }
   else if (totalScore > 8) {
      document.getElementById("background").style.backgroundColor = "#121f45";
   }
   else if (totalScore > 0) {
      document.getElementById("background").style.backgroundColor = "#fc6200";
   }
   else {
      document.getElementById("background").style.backgroundColor = "#a6051a";
   }
}

let myVar;

//This function will send an alert when time is up
function myFunction() {
   myVar = setTimeout(function () { stop(); alert("Time is Up! Click OK to Check Your Score"); displayResults(); }, 60000);
}

//This function will stop the time and display the results
function endQuiz() {
   clearTimeout(myVar);
   displayResults();
   stop();
}

let timeElapsed = 0;
let myTimer = 0;

//This function will start the timer
function timer() {
   myTimer = setInterval(function () {timeElapsed += 1;document.getElementById("time").innerText = timeElapsed;}, 1000);
}

function stop() {
   clearInterval(myTimer);
}

