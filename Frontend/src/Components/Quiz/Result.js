import React from 'react';
import './Result.css'; // Create and import a CSS file for styling

const Result = ({ score, totalQuestions }) => {
  return (
    <div className="result-container">
      <h2>Quiz Completed!</h2>
      <p>
        Your Score: {score} / {totalQuestions}
      </p>
    </div>
  );
};

export default Result;
