import React from 'react';
import './buttons.css';

const Quiz = ({ question, onAnswer, currentIndex, totalQuestions, totalAnswered, answers }) => {
  const isActive = (option) => {
    return answers[currentIndex] && answers[currentIndex].text === option.text;
  };

  return (
    <div>
      <h2>Question {currentIndex + 1} of {totalQuestions}</h2>
      <h3>{question.question}</h3>
      <div className="answers-container">
        {question.options.map((option, index) => (
          <button 
          className={`button-64 ${isActive(option) ? 'active' : ''}`}
          key={index} 
          onClick={() => onAnswer(option, currentIndex)}
          >
            {option.text}
          </button>
        ))}
      </div>
      <button className='button-small' onClick={() => onAnswer(null, currentIndex-2)} disabled={currentIndex===0}>prev</button>
      <button className='button-small' onClick={() => onAnswer(null, currentIndex)} disabled={currentIndex===totalAnswered}>next</button>
    </div>
  );
};

export default Quiz;
