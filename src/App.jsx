import React,{useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ModulesPage from './pages/QuizModule/QuizModule';
import QuizPage from './components/Quiz/QuizSection/QuizSection';
import Layout from './layouts/Layout';

const App = () => {
  const selectedModule = useSelector((state) => state.quiz.selectedModule);
  const theme = useSelector(state=>state.theme.mode)

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <Routes>
        {/* Wrap all routes in the Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<ModulesPage />} />
          
          {/* Protect the Quiz route */}
          <Route
            path="/quiz"
            element={
              selectedModule ? <QuizPage /> : <Navigate to="/" replace />
            }
          />
        </Route>

        {/* Catch-all for undefined routes */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
