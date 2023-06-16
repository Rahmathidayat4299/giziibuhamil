import React from 'react';

const Button = (props) => {
  const check = () => {
    console.log('cek')
    return this
  }
  return (
    <button onClickCapture={check} data={`${props.data}`} className={`${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
