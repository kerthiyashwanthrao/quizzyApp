import React, { useEffect, useState } from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import "./QuizSection.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAnswers,
  nextQuestion,
  prevQuestion,
  submitQuiz,
  decreaseTimer,
} from "../../../reducers/quizSectionReducer";
import ProgressBar from "../../ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";

const QuizSection = () => {
  const {
    score,
    currentIndex,
    selectedAnswers,
    questionsData,
    quizSubmitted,
    timer,
  } = useSelector((state) => state.quiz);
  const dispatch = useDispatch();
  const [initialTimer, setInitialTimer] = useState(0);
  const navigate = useNavigate()

  const currentQuestion = questionsData[currentIndex];

  useEffect(() => {
    setInitialTimer(timer);
    console.log("initial time");
    
  }, []);

  useEffect(() => {
    if (quizSubmitted) return; // ⛔ Stop timer if quiz is done

    const interval = setInterval(() => {
      dispatch(decreaseTimer());
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, [dispatch, quizSubmitted]);

  const handleAnswerSelect = (answer) => {
    dispatch(selectAnswers({ questionId: currentQuestion.id, answer }));
  };

  const handleNextOrSubmit = () => {
    if (currentIndex + 1 === questionsData.length) {
      console.log("submit");

      dispatch(submitQuiz());
    } else {
      console.log("next");
      
      dispatch(nextQuestion());
    }
  };

 const onClickBackToHome = () =>{
  navigate("/")
 } 

  return (
    <div className="quizSection">
      {!quizSubmitted &&<ProgressBar timer={timer} initialTimer={initialTimer} />}
      {!quizSubmitted ? (
        <>
          <h2 className="question">
            Question {currentIndex + 1} of {questionsData.length}
          </h2>
          <QuestionCard
            question={currentQuestion}
            selectedAnswer={selectedAnswers[currentQuestion.id] || null}
            onAnswerSelect={handleAnswerSelect}
          />
          <div className="button-container">
            <button
              onClick={() => dispatch(prevQuestion())}
              className="btn-primary"
              disabled={currentIndex === 0}
            >
              Previous
            </button>
            <button
              onClick={handleNextOrSubmit}
              className="btn-primary"
              disabled={!selectedAnswers}
            >
              {currentIndex + 1 === questionsData.length ? "Submit" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <div className="quiz-result">
          <h2 className="quiz-title">🎉 Quiz Completed!</h2>
          <p className="quiz-score">
            Your score: <span>{score}</span> /{" "}
            <span>{questionsData.length}</span>
          </p>
          <button className="btn btn-cancel" onClick={onClickBackToHome}>
            Back to home
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizSection;
