import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  selectAnswers,
  nextQuestion,
  submitQuiz,
  decreaseTimer,
} from "../../../reducers/quizSectionReducer";
import QuestionCard from "../QuestionCard/QuestionCard";
import ProgressBar from "../../ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";
import "./QuizSection.css";

const QuizSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Efficient selector usage with shallowEqual
  const {
    score,
    currentIndex,
    selectedAnswers,
    questionsData,
    quizSubmitted,
    timer,
  } = useSelector((state) => state.quiz, shallowEqual);

  const [initialTimer] = useState(timer);
  const [answerSelectError, setAnswerSelectError] = useState(false);

  const currentQuestion = useMemo(() => questionsData[currentIndex], [questionsData, currentIndex]);

  // Timer effect
  useEffect(() => {
    if (quizSubmitted) return;

    const interval = setInterval(() => {
      dispatch(decreaseTimer());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, quizSubmitted]);

  // Memoized handler for selecting answers
  const handleAnswerSelect = useCallback((answer) => {
    setAnswerSelectError(false);
    dispatch(selectAnswers({ questionId: currentIndex, answer }));
  }, [dispatch, currentIndex]);

  // Memoized handler for next/submit
  const handleNextOrSubmit = useCallback(() => {
    const isAnswerSelected = currentIndex in selectedAnswers;

    if (currentIndex + 1 === questionsData.length) {
      if (isAnswerSelected) {
        dispatch(submitQuiz());
        setAnswerSelectError(false);
      } else {
        setAnswerSelectError(true);
      }
    } else {
      if (isAnswerSelected) {
        dispatch(nextQuestion());
        setAnswerSelectError(false);
      } else {
        setAnswerSelectError(true);
      }
    }
  }, [currentIndex, selectedAnswers, questionsData.length, dispatch]);

  const onClickBackToHome = useCallback(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  return (
    <div className="quizSection">
      {!quizSubmitted && (
        <ProgressBar timer={timer} initialTimer={initialTimer} />
      )}

      {!quizSubmitted ? (
        <>
          <div className="question">
            <h3 className="question-no">
              Question {currentIndex + 1} of {questionsData.length}
            </h3>
            <span style={{ color: "red" }}>{timer} secs left</span>
          </div>

          <QuestionCard
            question={currentQuestion}
            selectedAnswer={selectedAnswers[currentIndex] || null}
            onAnswerSelect={handleAnswerSelect}
          />

          {answerSelectError && (
            <p style={{ color: "red", textAlign: "center", fontSize: "18px" }}>
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

export default React.memo(QuizSection);
