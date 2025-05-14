import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import ModulesPage from "./pages/QuizModule/QuizModule";
import QuizPage from "./components/Quiz/QuizSection/QuizSection";
import Layout from "./layouts/Layout";
import GoogleLoginButton from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const selectedModule = useSelector((state) => state.quiz.selectedModule);
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<GoogleLoginButton />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<ModulesPage />} />
            <Route
              path="/quiz"
              element={
                selectedModule ? <QuizPage /> : <Navigate to="/" replace />
              }
            />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
