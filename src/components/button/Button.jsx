import React from 'react';
import './button.scss';

const Button = ({ grad, children, onClick}) => {
  return (
    <div className={'btn ' + grad} onClick={onClick}>
      <p>
        {children} 
      </p>
    </div>
  )
}

export default Button