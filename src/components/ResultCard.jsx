import React from 'react';

export default function ResultCard({ score, total, onRetake, onHome }) {
  const incorrect = total - score;
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="result-card">
      <p className="result-subtitle">Quiz Completed</p>
      <h2>Your score:</h2>
      <div className="score-display">
        {score} / {total}
      </div>

      <div className="result-stats">
        <p><strong>Total Questions:</strong> {total}</p>
        <p><strong>Correct Answers:</strong> {score}</p>
        <p><strong>Incorrect Answers:</strong> {incorrect}</p>
        <p><strong>Percentage:</strong> {percentage}%</p>
      </div>

      <div className="result-actions">
        <button className="btn btn-primary" onClick={onRetake}>Retake Quiz</button>
        <button className="btn btn-secondary" onClick={onHome}>Return Home</button>
      </div>
    </div>
  );
}