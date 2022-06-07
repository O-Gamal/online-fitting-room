import React from 'react';
import './radio.scss';


const Radio = ({label, id, width, vart, ...props}) => {
  return (
    <div className={"radioo "+vart} >
        <input type='radio' {...props} id={id}/>
        <label  for={id} style={{width:{width}}}>{label}</label>
    </div>
  )
}

export default Radio