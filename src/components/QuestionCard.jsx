import React from 'react';
import AnswerOption from './AnswerOption';

export default function QuestionCard({ questionData, selectedAnswer, onSelectAnswer }) {
  return (
    <div className="question-card">
      <h3 className="question-text">{questionData.question}</h3>
      <div className="options-container">
        {questionData.options.map((option, index) => (
          <AnswerOption
            key={index}
            option={option}
            isSelected={selectedAnswer === option}
            onSelect={onSelectAnswer}
          />
        ))}
      </div>
    </div>
  );
}