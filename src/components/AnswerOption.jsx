import React from 'react';

export default function AnswerOption({ option, isSelected, onSelect }) {
  return (
    <button
      type="button"
      className={`answer-option ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(option)}
    >
      {option}
    </button>
  );
}