import React from 'react';

export default function ProgressBar({ current, total }) {
  const progressPercent = ((current) / total) * 100;

  return (
    <div className="progress-bar-container">
      <div 
        className="progress-bar-fill" 
        style={{ width: `${progressPercent}%` }}
      ></div>
    </div>
  );
}