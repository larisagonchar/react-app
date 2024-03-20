import React from 'react';
import './error-label.css';

const ErrorLabel = ({ errorMessage }) => {
  return (
    <span data-testid='error' className='error-label'>{errorMessage}</span>
  );
};

export default ErrorLabel;