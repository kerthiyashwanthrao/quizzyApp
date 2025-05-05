import React from "react";
import { useSelector } from "react-redux";
import QuizSection from "../../components/Quiz/QuizSection/QuizSection";

const Quiz = () => {
  const { currentIndex, questionsData } = useSelector((state) => state.quiz);

  const currentQuestion = questionsData[currentIndex];

  return (
    <div className="quizMainSection">
      <QuizSection key={currentIndex} question={currentQuestion} />
    </div>
  );
};

export default Quiz;
