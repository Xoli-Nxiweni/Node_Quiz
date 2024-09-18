const readline = require('readline');
const questions = require('./questions.json');

let score = 0;
let questionIndex = 0;
let quizTime = 60 * 10; 
let questionTimeLimit = 30; 
let quizInterval;
let questionTimeout;
let questionAnswered = false;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const displayQuizTimer = () => {
  const minutes = Math.floor(quizTime / 60);
  const seconds = quizTime % 60;
  console.log(`\nQuiz time remaining: ${minutes}:${seconds.toString().padStart(2, '0')}`);
};

const checkAnswer = (answer, question) => {
  if (answer.trim().toUpperCase() === question.answer.toUpperCase()) {
    console.log('Correct!');
    score++;
  } else {
    console.log(`Incorrect! The correct answer was: ${question.answer}`);
    console.log(`Explanation: ${question.explanation}`);
  }
};

const askQuestion = () => { 
  if (questionIndex < questions.quiz.length && quizTime > 0) {
    const question = questions.quiz[questionIndex];
    questionAnswered = false; 

    console.log(`\nQuestion ${questionIndex + 1}: ${question.text}`);
    question.choices.forEach((choice) => console.log(choice));

    // Set a timeout for the current question
    questionTimeout = setTimeout(() => {
      if (!questionAnswered) { 
        console.log("\nTime's up for this question!");
        questionIndex++;
        askQuestion(); 
      }
    }, questionTimeLimit * 1000);

    // Ask the user for input
    rl.question('You have 30 Seconds to answer \nYour options (A, B, C, or D): ', (answer) => {
      if (!questionAnswered) { 
        clearTimeout(questionTimeout);
        checkAnswer(answer, question); 
        questionAnswered = true; 
        questionIndex++; 
        askQuestion(); 
      }
    });
  } else {
    endQuiz();
  }
};

const endQuiz = () => {
  clearInterval(quizInterval);
  console.log('\nQuiz ended!');
  console.log(`Your final score: ${score}/${questions.quiz.length}`);
  rl.close();
  process.exit(0);
};

const startQuiz = () => {
  console.log('Quiz started! Answer each question within 30 seconds.\n');
  
  // Start quiz timer
  quizInterval = setInterval(() => {
    quizTime--;
    // displayQuizTimer(); 

    if (quizTime <= 0) {
      clearInterval(quizInterval);
      endQuiz(); 
    }
  }, 1000);

  askQuestion();
};

startQuiz();
