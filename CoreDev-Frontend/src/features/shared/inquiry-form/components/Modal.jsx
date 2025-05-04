import React from 'react';
import '../styles/Modal.css';

const Modal = ({ isOpen, onClose, isdisable,children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" disabled={isdisable} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;