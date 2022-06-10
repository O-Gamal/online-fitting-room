import React,{ useId} from 'react';
import './radio.scss';
import { Tooltip } from '@mantine/core';


const Radio = ({label, color, width, vart, number, ...props}) => {

  const id = useId();

  if(vart === 'rnd')
    return (
      <Tooltip
      label={label}
      radius="md"
      withArrow
      transition="fade"
      transitionDuration={200}
      >
        <div className='rnd' >
            <input type='radio' {...props} id={id}/>
            <label  htmlFor={id} style={{backgroundColor:color}}> </label>
        </div>
      </Tooltip>
    )
  return (
    <div className={"radioo " + vart} >
        <input type='radio' {...props} id={id}/>
        <label  htmlFor={id} style={{width:{width}}}>{label}</label>
    </div>
  )
  
}

export default Radio