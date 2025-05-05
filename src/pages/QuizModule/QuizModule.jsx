import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectModule, startQuiz } from "../../reducers/quizSectionReducer";
import { useNavigate } from "react-router-dom";
import ReusableModal from "../../components/ReusableModal/ReusableModal";
import "./QuizModule.css";
import backgroundImage from "../../assets/keyboard-tea-cup-apple-office-stationeries-black-background.jpg"

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
    dispatch(startQuiz)
    navigate("/quiz"); // Navigate to Quiz Page
    setIsOpen(false);
  };

  return (
    <div className="modules-page" style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh', backgroundSize:"cover" }}  >
      <h2 style={{color:"#d5e2ee"}} >Select a Module for Quiz</h2>
      <div className="modules-list">
        {modules.map((module) => (
          <button key={module} onClick={() => handleModuleClick(module)}>
            {module}
          </button>
        ))}
      </div>
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
