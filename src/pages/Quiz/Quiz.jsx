import { useSelector } from "react-redux";
import React from "react";
import QuizSection from "../../components/Quiz/QuizSection/QuizSection";

const Quiz = () => {
  const { currentIndex, questionsData } = useSelector((state) => state.quiz);

const currentQuestion = React.useMemo(
    () => questionsData[currentIndex],
    [questionsData, currentIndex]
  );
  return (
    <div className="quizMainSection">
      <QuizSection key={currentIndex} question={currentQuestion} />
    </div>
  );
};

export default Quiz;
