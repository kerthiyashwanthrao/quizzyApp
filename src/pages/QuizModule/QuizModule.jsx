import { useCallback, useState, useMemo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  selectModule,
  startQuiz,
  shuffleQuestions,
} from "../../reducers/quizSectionReducer";
import { useNavigate } from "react-router-dom";
import ReusableModal from "../../components/ReusableModal/ReusableModal";
import "./QuizModule.css";
import { motion } from "framer-motion";

const ModulesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentModule, setCurrentModule] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Memoized selector with shallowEqual to avoid unnecessary rerenders
  const modules = useSelector((state) => state.quiz.modules, shallowEqual);

  // Memoize handlers to avoid redefining on every render
  const handleModuleClick = useCallback(
    (moduleName) => {
      setIsOpen(true);
      dispatch(selectModule(moduleName));
      setCurrentModule(moduleName);
    },
    [dispatch]
  );

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onConfirm = useCallback(() => {
    dispatch(shuffleQuestions());
    dispatch(startQuiz());
    navigate("/quiz", { replace: true });
    setIsOpen(false);
  }, [dispatch, navigate]);

  // Memoize rendered buttons to prevent unnecessary re-renders
  const renderedModules = useMemo(() => (
    modules.map((module) => (
      <button key={module} onClick={() => handleModuleClick(module)}>
        {module}
      </button>
    ))
  ), [modules, handleModuleClick]);

  return (
    <div className="modules-page">
      <h2>Select a Module for Quiz</h2>
      <motion.div
        className="modules-list"
        initial={{ opacity: 0, y: 50, scale: 1 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {renderedModules}
      </motion.div>
      <ReusableModal
        isOpen={isOpen}
        onClose={onClose}
        onConfirm={onConfirm}
        moduleName={currentModule}
      />
    </div>
  );
};

export default ModulesPage;
