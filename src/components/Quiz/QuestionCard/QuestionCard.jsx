import React, { useMemo } from "react";
import "./QuestionCard.css";

const QuestionCard = ({ question, selectedAnswer, onAnswerSelect }) => {
  // Memoize answers to avoid recalculating Object.entries on every render
  const validAnswers = useMemo(() => {
    return Object.entries(question.answers).filter(([, value]) => !!value);
  }, [question.answers]);

  return (
    <div className="question-card">
      <h3 className="question-title">{question.question}</h3>
      {question.description && (
        <p className="question-description">{question.description}</p>
      )}

      {validAnswers.map(([key, value]) => {
        const isSelected = selectedAnswer === key;

        return (
          <button
            key={key}
            className={`answer-button ${isSelected ? "selected" : ""}`}
            onClick={() => onAnswerSelect(key)}
          >
            {value}
          </button>
        );
      })}
    </div>
  );
};

// React.memo prevents unnecessary re-renders when props don't change
export default React.memo(QuestionCard);
