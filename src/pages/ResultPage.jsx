import React from 'react';
import { useNavigate } from 'react-router-dom';
import ResultCard from '../components/ResultCard';

export default function ResultPage({ score, total }) {
  const navigate = useNavigate();

  return (
    <div className="page-container result-page">
      <ResultCard
        score={score}
        total={total}
        onRetake={() => navigate('/quiz')}
        onHome={() => navigate('/')}
      />
    </div>
  );
}