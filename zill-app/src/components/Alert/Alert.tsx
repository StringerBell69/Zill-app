// Alert.tsx
import React from 'react';
import '../../styles/Alert.css';

interface AlertProps {
  message: string;
  show: boolean;
}

const Alert: React.FC<AlertProps> = ({ message, show }) => {
  return (
    show ? (
      <div className="alert">
        <p>{message}</p>
      </div>
    ) : null
  );
};

export default Alert;
