import React from 'react';
import './ReusableModal.css';

const ReusableModal = ({ isOpen, onClose, onConfirm, moduleName }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h2 className="modal-title">Ready to Begin?</h2>
        <p className="modal-message">
          Are you ready to start the <span className="module-name">{moduleName}</span> quiz?
        </p>
        <div className="modal-actions">
          <button className="btn btn-confirm" onClick={onConfirm}>
            Yes, Start Quiz
          </button>
          <button className="btn btn-cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReusableModal;
