# Node Quiz Application

## Overview

A command-line quiz application built with Node.js. This application allows users to answer multiple-choice questions within a time limit. The quiz consists of a total of 10 minutes, with each question having a 30-second limit.

## Tech Stack

- **Node.js**: JavaScript runtime used for building the application.
- **readline**: Node.js module used for reading user input from the command line.
- **JSON**: Format used for storing quiz questions and answers.

## Installation

1. **Clone the Repository**

  
   git clone https://github.com/Xoli-Nxiweni/Node_Quiz.git


2. **Navigate to the Project Directory**


   cd Node_Quiz


3. **Prepare the Questions**

   Create a `questions.json` file in the root directory with the following format:

   {
     "quiz": [
       {
         "text": "Question text here?",
         "choices": [
           "A. Choice 1",
           "B. Choice 2",
           "C. Choice 3",
           "D. Choice 4"
         ],
         "answer": "A",
         "explanation": "Explanation of the correct answer."
       }
       // Add more questions as needed
     ]
   }

## Usage

1. **Start the Quiz**

   Run the following command in your terminal:

   node index.js


2. **Answer the Questions**

   When prompted, input your answer (A, B, C, or D) and press Enter.

3. **View Results**

   At the end of the quiz, your final score will be displayed.

## Contact

For issues or questions, contact [xolinxiweni@gmail.com](mailto:xolinxiweni@gmail.com).

## Possible Links

- [GitHub Repository](https://github.com/Xoli-Nxiweni/Node_Quiz)
