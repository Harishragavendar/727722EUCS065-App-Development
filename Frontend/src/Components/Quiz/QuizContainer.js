import React, { useEffect, useState } from 'react';
import Question from './Question';
import Result from './Result';

const QuizContainer = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=3&category=27&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then(data => {
        const formattedQuestions = data.results.map((question) => {
          const incorrectAnswers = question.incorrect_answers.map(answer => ({
            text: answer,
            isCorrect: false,
          }));
          const correctAnswer = {
            text: question.correct_answer,
            isCorrect: true,
          };
          const allAnswers = [...incorrectAnswers, correctAnswer];
          return {
            ...question,
            answers: allAnswers.sort(() => Math.random() - 0.5),
          };
        });
        setQuestions(formattedQuestions);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return <Result score={score} totalQuestions={questions.length} />;
  }

  return (
    <div id="qbox">
      <br />
      {questions.length > 0 ? (
        <Question
          question={questions[currentQuestionIndex]}
          onAnswerClick={handleAnswerClick}
        />
      ) : (
        <p id="load">Loading questions...</p>
      )}
    </div>
  );
};

export default QuizContainer;
