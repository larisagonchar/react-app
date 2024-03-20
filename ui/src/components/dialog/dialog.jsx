import React from 'react';
import './dialog.css';
import { createPortal } from 'react-dom';
import Title from '../title/title';
import ButtonClose from '../controls/button-close/button-close';
import FocusTrap from 'focus-trap-react';

const Dialog = ({ title, children, onClose }) => {

  const dialog = (
    <FocusTrap>
      <dialog className='dialog'>
        <div className='dialog__content'>
          <div className='dialog__header'>
            <ButtonClose onClick={onClose} />
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