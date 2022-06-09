import React,{ useId } from 'react';
import './radio.scss';


const Radio = ({label, width, vart, number, ...props}) => {

  const id = useId();

  return (
    <div className={"radioo "+vart} >
        <input type='radio' {...props} id={id}/>
        <label  htmlFor={id} style={{width:{width}}}>{label}</label>
    </div>
  )
}

export default Radio