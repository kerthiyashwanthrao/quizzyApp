// quizSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { questionsData } from "../questions";
// import * as AllQuestions from "../Questions"
import { htmlQuestionsData } from "../Questions/html";
import { cssQuestionsData } from "../Questions/css";
import { javascriptQuestionsData } from "../Questions/javascript";
import { reactjsQuestionsData } from "../Questions/reactjs";
import { reduxQuestionsData } from "../Questions/redux";


const initialState = {
  questionsData: questionsData,
  score: 0,
  quizStarted: false,
  quizSubmitted: false,
  timer: 30, // 5 minutes
  initialTimer:30,
  modules: ['HTML', 'CSS', 'JavaScript', 'React',"Redux"],
  highScore: 0,
  currentIndex: 0,
  selectedAnswers: {},
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    startQuiz: (state) => {
      // state.questions = action.payload.questions;
      state.quizStarted = true;
      state.currentQuestionIndex = 0;
      state.answers = {};
      state.score = 0;
      state.quizSubmitted = false;
      state.timer =  30;
    },
    resetQuiz: (state) => {
      Object.assign(state, initialState);
    },
    selectAnswers: (state, action) => {
      const { questionId, answer } = action.payload;
      // If the same answer is selected again, remove it (deselect)
      if (state.selectedAnswers[questionId] === answer) {
        const updatedAnswers = { ...state.selectedAnswers };
        delete updatedAnswers[questionId]; // Remove the key
        state.selectedAnswers = updatedAnswers;
        console.log("Deselected answer for question", questionId);
      } else {
        // Otherwise, select the new answer
        state.selectedAnswers = {
          ...state.selectedAnswers,
          [questionId]: answer,
        };
      }
    }
,    
    prevQuestion: (state) => {
      if (state.currentIndex > 0) {
        state.currentIndex = state.currentIndex - 1;
      }
    },
    submitQuiz: (state) => {
      let score = 0;
      state.questionsData.forEach((question, index) => {
        if (state.selectedAnswers[index] === question.correct_answer) {
          score += 1;
        }
      });
      state.score = score;
      state.quizSubmitted = true;
      state.quizStarted = false
      state.selectedAnswers = {}
    
      if (state.score > state.highScore) {
        state.highScore = state.score;
      }
    },
    nextQuestion: (state) => {
      state.currentIndex += 1;
      state.timer= initialState.initialTimer
    },
    setHighScore: (state) => {
      if (state.score > state.highScore) {
        state.highScore = state.score;
      }
    },
    setScore: (state) => {
      if (
        state.selectedAnswers[state.currentIndex] ===
        state.questionsData[state.currentIndex].correct_answer
      ) {
        state.score = state.score + 1;
      }
    },
    shuffleQuestions:(state)=>{
      state.questionsData = state.questionsData.sort(()=>Math.random()-0.5)
    },
    decreaseTimer: (state) => {
      if (state.timer > 0) {
        state.timer -= 1;
      }

      if (state.timer ===0 && state.currentIndex<state.questionsData.length-1){
        state.timer = initialState.initialTimer
        state.currentIndex = state.currentIndex + 1

      }
      if(state.timer === 0 && state.currentIndex===state.questionsData.length-1 )
        state.quizSubmitted = true
    },
    selectModule: (state,action) => {
      const moduleName = action.payload;
      state.selectedModule = moduleName;
      state.currentIndex = 0;
      state.quizSubmitted = false;
      state.timer = 30;
      // state.initialTimer = 10;

      // Load questions based on selected module
      switch (moduleName) {
        case 'HTML':
          state.questionsData = htmlQuestionsData;
          break;
        case 'CSS':
          state.questionsData = cssQuestionsData;
          break;
        case 'JavaScript':
          state.questionsData = javascriptQuestionsData;
          break;
        case 'React':
          state.questionsData = reactjsQuestionsData;
          break;
          case "Redux":
            state.questionsData = reduxQuestionsData;
            break;
        default:
          state.questionsData = [];
          break;
      }
    },
  },
});

export const {
  startQuiz,
  resetQuiz,
  selectAnswers,
  nextQuestion,
  prevQuestion,
  timerTick,
  submitQuiz,
  setHighScore,
  currentIndex,
  selectedAnswers,
  decreaseTimer,
  selectModule,
  shuffleQuestions
} = quizSlice.actions;

export default quizSlice.reducer;
