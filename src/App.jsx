import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import './App.css';

export default function App() {
  const [quizResult, setQuizResult] = useState({ score: 0, total: 10 });

  const handleFinishQuiz = (score, total) => {
    setQuizResult({ score, total });
  };

  return (
    <Router>
      <div className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<QuizPage onFinishQuiz={handleFinishQuiz} />} />
          <Route 
            path="/result" 
            element={<ResultPage score={quizResult.score} total={quizResult.total} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}