import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectModule,
  startQuiz,
  shuffleQuestions,
} from "../../reducers/quizSectionReducer";
import { useNavigate } from "react-router-dom";
import ReusableModal from "../../components/ReusableModal/ReusableModal";
import "./QuizModule.css";
import { motion } from "framer-motion";
import NewProgressBar from "../../components/NewProgressBar";
import DependentDropdown from "../../PracticeComponents/DependentDropdown";

const ModulesPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentModule, setCurrentModule] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const modules = useSelector((state) => state.quiz.modules);

  const handleModuleClick = (moduleName) => {
    setIsOpen(true);
    dispatch(selectModule(moduleName));
    setCurrentModule(moduleName);
  };
  const onClose = () => setIsOpen(false);

  const onConfirm = () => {
    dispatch(shuffleQuestions());
    dispatch(startQuiz());
    navigate("/quiz", { replace: true });
    setIsOpen(false);
  };

  return (
    <div className="modules-page">
    {/* <NewProgressBar/> */}
    {/* <DependentDropdown/> */}
      <h2 >Select a Module for Quiz</h2>
      <motion.div
        className="modules-list"
        initial={{ opacity: 0, y: 50, scale: 1 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 4,
          ease: [0.22, 1, 0.36, 1], // a smooth "easeOutExpo" feel
        }}
      >
        {modules.map((module) => (
          <button key={module} onClick={() => handleModuleClick(module)}>
            {module}
          </button>
        ))}
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
