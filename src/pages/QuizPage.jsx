import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import QuizHeader from '../components/QuizHeader';
import ProgressBar from '../components/ProgressBar';
import QuestionCard from '../components/QuestionCard';

export default function QuizPage({ onFinishQuiz }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const navigate = useNavigate();
  const currentQuestion = questions[currentIndex];

  const handleNext = () => {
    if (!selectedAnswer) return;

    // Check correctness
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }

    // Move to next or finish
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null); // Reset choice for next question
    } else {
      const finalScore = selectedAnswer === currentQuestion.correctAnswer ? score + 1 : score;
      onFinishQuiz(finalScore, questions.length);
      navigate('/result');
    }
  };

  return (
    <div className="page-container quiz-page">
      <QuizHeader currentQuestion={currentIndex + 1} totalQuestions={questions.length} />
      <ProgressBar current={currentIndex + 1} total={questions.length} />

      <QuestionCard
        questionData={currentQuestion}
        selectedAnswer={selectedAnswer}
        onSelectAnswer={setSelectedAnswer}
      />

      <div className="quiz-footer">
        <button
          className="btn btn-primary"
          onClick={handleNext}
          disabled={!selectedAnswer}
        >
          {currentIndex === questions.length - 1 ? 'Submit' : 'Next'}
        </button>
      </div>
    </div>
  );
}