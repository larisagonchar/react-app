import React from 'react';
import './error-label.css';

const ErrorLabel = ({ label }) => {
  return (
    <span data-testid='error' className='error-label'>{label}</span>
  );
};

export default ErrorLabel;