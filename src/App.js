import React, { useState } from 'react';
import Header from './components/Header';
import Quiz from './components/Quiz';
import Result from './components/Result';
import questions from './questions';
import './App.css';


const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer, index) => {
    setAnswers([...answers.slice(0, index), answer]);
    setCurrentQuestion(index + 1);
    if (index === questions.length - 1) {
      setShowResult(true);
    } else {
      setShowResult(false);
    }
  };

  const calculateResult = () => {
    // Calculating answers
    const count = answers.reduce((acc, answer) => {
      acc[answer.type] = (acc[answer.type] || 0) + 1;
      return acc;
    }, {});

    // Sorting data
    const entries = Object.entries(count);
    entries.sort(([, valueA], [, valueB]) => valueB - valueA);
    const sortedCount = Object.fromEntries(entries);

    return sortedCount;
  };

  return (
    <div className="App">
      <Header />
      {!showResult ? (
        <Quiz
        question={questions[currentQuestion]}
        onAnswer={handleAnswer}
        currentIndex={currentQuestion}
        totalQuestions={questions.length}
        />
        ) : (<Result result={calculateResult()} />)
      }
    </div>
  );
};

export default App;
