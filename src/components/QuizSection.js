import React, { useState } from 'react';

const QuizSection = ({ questions }) => {
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswerChange = (questionIndex, selectedOption) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[questionIndex] = selectedOption;
    setUserAnswers(newUserAnswers);
  };

  const handleSubmit = () => {
    // Handle submission logic, such as displaying a summary or sending userAnswers to the server
  };

  return (
    <div>
      <h2>Quiz</h2>
      {questions.map((question, questionIndex) => (
        <div key={question.id}>
          <p>{question.question}</p>
          {question.options.map((option, optionIndex) => (
            <label key={optionIndex}>
              <input
                type="radio"
                name={`question-${question.id}`}
                value={optionIndex}
                checked={userAnswers[questionIndex] === optionIndex}
                onChange={() => handleAnswerChange(questionIndex, optionIndex)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default QuizSection;
