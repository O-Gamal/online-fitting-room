import React from 'react';
import './button.scss';

const Button = ({pad, full, children, onClick}) => {
  return (
    <div className={'btn '+full} onClick={onClick} style={{paddingTop: pad , paddingBottom: pad}}>
      <p>
        {children} 
      </p>
    </div>
  )
}

export default Button