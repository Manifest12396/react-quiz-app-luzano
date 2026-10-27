import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-container home-page">
      <h1>Welcome to the</h1>
      <h2 className="gradient-text">Frontend Quiz!</h2>
      <p>Test your front-end development knowledge with 10 questions.</p>
      <button 
        className="btn btn-primary start-btn" 
        onClick={() => navigate('/quiz')}
      >
        Start Quiz
      </button>
    </div>
  );
}