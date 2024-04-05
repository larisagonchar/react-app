import React from 'react';
import './dialog.css';
import { createPortal } from 'react-dom';
import Title from '../title/title';
import ButtonClose from '../controls/button-close/button-close';
import FocusTrap from 'focus-trap-react';
import { useNavigate } from 'react-router-dom';

const Dialog = ({ title, children }) => {
  const navigate = useNavigate();

  const handleDialogClose = () => {
    navigate('/');
  };

  const dialog = (
    <FocusTrap>
      <dialog className='dialog'>
        <div className='dialog__content'>
          <div className='dialog__header'>
            <ButtonClose onClose={handleDialogClose} />
            <Title title={title} />
          </div>
          {children}
        </div>
      </dialog>
    </FocusTrap>
  );

  return (
    createPortal(dialog, document.body)
  );
};

export default Dialog;