// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from "./reducers/counterReducer"
import quizSlice from "./reducers/quizSectionReducer"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    quiz:quizSlice
  },
});
