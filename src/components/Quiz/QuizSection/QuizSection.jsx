import React, { useEffect, useState } from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import "./QuizSection.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAnswers,
  nextQuestion,
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
  const navigate = useNavigate();
  const [answerSelectError, setAnswerSelectError] = useState(false);

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
    setAnswerSelectError(false);
    dispatch(selectAnswers({ questionId: currentQuestion.id, answer }));
  };

  const handleNextOrSubmit = () => {
    if (currentIndex + 1 === questionsData.length) {
      dispatch(submitQuiz());
    } else {
      if (currentIndex in selectedAnswers) {
        setAnswerSelectError(false);

        dispatch(nextQuestion());
      } else {
        setAnswerSelectError(true);
        console.log(answerSelectError, "answerselect error");
      }
    }
  };

  const onClickBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="quizSection">
      {!quizSubmitted && (
        <ProgressBar timer={timer} initialTimer={initialTimer} />
      )}
      {!quizSubmitted ? (
        <>
          <div className="question">
            <h3>
              Question {currentIndex + 1} of {questionsData.length}
            </h3>

            <span style={{ color: "red" }}> {timer} secs left </span>
          </div>

          <QuestionCard
            question={currentQuestion}
            selectedAnswer={selectedAnswers[currentQuestion.id] || null}
            onAnswerSelect={handleAnswerSelect}
          />
          {answerSelectError && (
            <p style={{ color: "red", textAlign: "center" ,fontSize:"18px"}}>
              * Please select an answer
            </p>
          )}
          <div className="button-container">
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
