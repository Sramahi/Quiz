import './App.css';
import React, { useState } from 'react';

  const questionsData = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Neptune'],
      correctAnswer: 'Mars',
    },
    {
      question: 'What is 7 * 8?',
      options: ['56', '64', '49', '72'],
      correctAnswer: '56',
    },
    {
      question: 'What is the only food that cannot go bad?',
      options: ['Dark chocolate', 'Peanut butter', 'Canned tuna', 'Honey'],
      correctAnswer: 'Honey',
    },
    {
      question: 'What is the most visited tourist attraction in the world?',
      options: ['Eiffel Tower', 'Statue of Liberty', 'Great Wall of China', 'Colosseum'],
      correctAnswer: 'Eiffel Tower',
    },
    {
      question: 'On average, how many seeds are located on the outside of a strawberry?',
      options: ['100', '200', '400', '176'],
      correctAnswer: '200',
    },
    {
      question: 'What is the oldest soft drink in the United States?',
      options: ['Coca Cola', 'Pepsi', 'Dr. Pepper', 'Canada Dry Ginger Ale'],
      correctAnswer: 'Dr. Pepper',
    },
    {
      question: 'Where was tea invented?',
      options: ['England', 'USA', 'China', 'Korea'],
      correctAnswer: 'China',
    },
  ];
  
  function App() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  
    const handleAnswerClick = (selectedAnswer) => {
      if (selectedAnswer === questionsData[currentQuestion].correctAnswer) {
        setScore(score + 1);
      } else {
        setIncorrectAnswers([...incorrectAnswers, currentQuestion]);
      }
  
      if (currentQuestion + 1 < questionsData.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowScore(true);
      }
    };
  
    const handleRestart = () => {
      setCurrentQuestion(0);
      setScore(0);
      setShowScore(false);
      setIncorrectAnswers([]);
    };
  
    return (
      <div className="quiz-container">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questionsData.length}
            {incorrectAnswers.length > 0 && (
              <div>
                <h2>Incorrectly answered questions:</h2>
                <ul>
                  {incorrectAnswers.map((questionIndex) => (
                    <li key={questionIndex}>
                      {questionsData[questionIndex].question}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <button className="restart-button" onClick={handleRestart}>
              Restart
            </button>
          </div>
        ) : (
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questionsData.length}
            </div>
            <div className="question-text">
              {questionsData[currentQuestion].question}
            </div>
            <div className="answer-section">
              {questionsData[currentQuestion].options.map((option) => (
                <button key={option} onClick={() => handleAnswerClick(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
  
  export default App;