import React from 'react';

export default function QuizHeader({ currentQuestion, totalQuestions }) {
  return (
    <header className="quiz-header">
      <h2>Frontend Quiz</h2>
      <span>Question {currentQuestion} of {totalQuestions}</span>
    </header>
  );
}