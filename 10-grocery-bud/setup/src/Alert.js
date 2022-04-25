import React, { useEffect } from 'react';

const Alert = ({ type, msg, removeAlert }) => {
  console.log(removeAlert, 'remove');

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
