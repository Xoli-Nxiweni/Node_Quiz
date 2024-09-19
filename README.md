Sure, here’s the updated `README.md` with the provided contact email:

```markdown
# Node Quiz Application

## Description

A command-line quiz application built with Node.js. It features a timed quiz with multiple-choice questions. Users have a total of 10 minutes to complete the quiz, with each question having a 30-second time limit.

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Xoli-Nxiweni/Node_Quiz.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd Node_Quiz
   ```

3. **Install Dependencies**

   No additional dependencies are required for this project.

4. **Prepare the Questions**

   Create a `questions.json` file in the root directory with the following format:

   ```json
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
   ```

## Usage

1. **Start the Quiz**

   Run the following command:

   ```bash
   node index.js
   ```

2. **Answer the Questions**

   - Input your answer (A, B, C, or D) when prompted and press Enter.

3. **View Results**

   Your final score will be displayed at the end of the quiz.

## License

MIT License

## Contact

For issues or questions, contact [xolinxiweni@gmail.com](mailto:xolinxiweni@gmail.com).
```

Feel free to adjust any other details as needed!
