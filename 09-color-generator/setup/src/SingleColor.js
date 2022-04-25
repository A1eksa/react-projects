import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(',');
  const hex = rgbToHex(...rgb);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setAlert(false);
  //   }, 3000);
  //   return () => clearTimeout(timeout);
  // }, [alert]);

  return (
    <article
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
      className={`color ${index > 7 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='percent-value'>{hex}</p>
      {alert && (
        <h4 className={`'alert' ${index > 7 && 'alert-light'}`}>
          copied to clipboard
        </h4>
      )}
    </article>
  );
};

export default SingleColor;
