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

// Function to display quiz timer
const displayQuizTimer = () => {
  const minutes = Math.floor(quizTime / 60);
  const seconds = quizTime % 60;
  process.stdout.write(`\rQuiz time remaining: ${minutes}:${seconds.toString().padStart(2, '0')}  `);
};

// Function to display question timer
const displayQuestionTimer = (remainingTime) => {
  process.stdout.write(`\rTime remaining for this question: ${remainingTime} seconds. Your option? : `);
};

// Function to check if the answer is correct and update the score
const checkAnswer = (answer, question) => {
  if (answer.trim().toUpperCase() === question.answer.toUpperCase()) {
    console.log('\nCorrect!');
    score++;
  } else {
    console.log(`\nIncorrect! The correct answer was: ${question.answer}`);
    console.log(`Explanation: ${question.explanation}`);
  }
};

// Function to ask the current question and manage the timing
const askQuestion = () => {
  return new Promise((resolve) => {
    if (questionIndex < questions.quiz.length && quizTime > 0) {
      const question = questions.quiz[questionIndex];
      questionAnswered = false;

      console.log(`\nQuestion ${questionIndex + 1}: ${question.text}`);
      question.choices.forEach((choice) => console.log(choice));

      let remainingTime = questionTimeLimit;
      displayQuestionTimer(remainingTime);

      // Set a timer for the current question
      questionTimeout = setInterval(() => {
        remainingTime--;
        displayQuestionTimer(remainingTime);

        if (remainingTime <= 0) {
          clearInterval(questionTimeout);
          console.log('\n\nTime\'s up for this question!');
          questionIndex++;
          resolve(); 
        }
      }, 1000);

      // Ask the user for input
      rl.question('', (answer) => {
        if (!questionAnswered) {
          clearInterval(questionTimeout);
          questionAnswered = true;
          checkAnswer(answer, question);
          questionIndex++;
          resolve(); 
        }
      });
    } else {
      resolve(); 
    }
  });
};

// Function to end the quiz and display the final score
const endQuiz = () => {
  clearInterval(quizInterval);
  console.log('\nQuiz ended!');
  console.log(`Your final score: ${score}/${questions.quiz.length}`);
  rl.close();
};

// Function to start the quiz and manage the overall quiz timer
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

  // IIFE
  (async () => {
    while (quizTime > 0 && questionIndex < questions.quiz.length) {
      try {
        await askQuestion();
      } catch (error) {
        console.error('An error occurred:', error.message);
      }
    }

    endQuiz();
  })();
};

startQuiz();
