import React from 'react';
import './components.css';

const Quiz = ({ question, onAnswer, currentIndex, totalQuestions }) => {

  return (
    <div>
      <h2>Question {currentIndex + 1} of {totalQuestions}</h2>
      <h3>{question.question}</h3>
      <div className="answers-container">
        {question.options.map((option, index) => (
          <button className='button-64' key={index} onClick={() => onAnswer(option, currentIndex)}>
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
