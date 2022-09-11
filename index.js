var readlineSync = require('readline-sync');
const chalk = require('chalk');
welcomeMsg();
function welcomeMsg() {
  var userName = readlineSync.question(
    chalk.bgYellow('Enter you First Name & Last Name: '),
  );
  //regex
  var letterNumber = /^([a-zA-Z]{1,}\s{0,1}[a-zA-Z]{1,})$/;
  while (letterNumber.test(userName) === false) {
    userName = readlineSync.question(
      chalk.redBright('Please Enter correct input? '),
    );
  }
  console.log(
    chalk.blue('\n', '------', 'Hi', chalk.italic.red(userName.toUpperCase()), 'Welocome to Quiz------', '\n',),
  );
}
// questions objects
var q1 = {
  id: 1,
  question: "Who is my favorite hero? ",
  answer: "sharukh Khan"
}
var q2 = {
  id: 2,
  question: "Which is my favorite Tea/coffee? ",
  answer: "Tea"
}
var q3 = {
  id: 3,
  question: "What is my favorite Movie? ",
  answer: "Kuch Kuch Hota Hai"
}
var q4 = {
  id: 4,
  question: "What is my favorite game? ",
  answer: "PubG"
}
var q5 = {
  id: 5,
  question: "What is my favorite place to visit ? ",
  answer: "Manali"
}
//variables
var score = 0;
var highScore = { HS: 2 };
var answer = [];
//function definition
function Quiz(QAObj) {
  var userAnswer = readlineSync.question(chalk.cyan(QAObj.id) + ": " + chalk.cyan(QAObj.question))
  var answerStored=QAObj.answer;
  if (userAnswer.toLowerCase() == answerStored.toLowerCase()) {
    score++;
    answer.push('Correct');
  } else {
    answer.push('Incorrect');
  }
}

var questionbank = [q1, q2, q3, q4, q5];
//calling function quiz
for (var i = 0; i < questionbank.length; i++) {
  var QA = questionbank[i];
  Quiz(QA);
}
//HighScore
if (highScore.HS > score) {
  console.log(chalk.blue("You score is less than highscore") + "\n" + "Highscore: " + highScore.HS + "\n" + "Your Score: " + score)
} else if (highScore.HS == score) {
  console.log(chalk.yellow("----------------------------------------------"))
  console.log(chalk.blue("your score is equal to Highscore: ") + score)
} else if (highScore.HS < score) {
  console.log(chalk.blue("Yipee!! You beat the Highscore") + "\n" + chalk.green("Your Score: ") + score + "");
}
//Showing detail of useranswered
console.log(chalk.yellow("----------------------------------------------"))
console.log(chalk.yellow("---Question you answer Correct & Incorrect---"))
for (var i = 0; i < answer.length; i++) {
  if (answer[i] == 'Correct') {
    console.log('Answer',i + 1+':', chalk.green(answer[i]))
  }
  else {
    console.log('Answer',i + 1+':', chalk.red(answer[i]))
  }
}