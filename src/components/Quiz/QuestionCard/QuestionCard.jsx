import React from "react";
import "./QuestionCard.css";

const QuestionCard = ({ question, selectedAnswer, onAnswerSelect }) => {
  return (
    <div className="question-card">
      <h3 className="question-title">{question.question}</h3>
      {question.description && (
        <p className="question-description">{question.description}</p>
      )}

      {Object.entries(question.answers).map(([key, value]) => {
        if (!value) return null;

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

export default QuestionCard;
