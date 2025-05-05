import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./reducers/quizSectionReducer";
import themeSlice from "./reducers/themeReducer";
import authSlice from "./reducers/authReducer"

export const store = configureStore({
  reducer: {
    quiz: quizSlice,
    theme: themeSlice,
    auth:authSlice
  },
});
