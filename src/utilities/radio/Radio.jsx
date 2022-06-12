import React,{ useId} from 'react';
import './radio.scss';
import { Tooltip } from '@mantine/core';
import { motion } from 'framer-motion';


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
        <motion.div
          className='rnd' 
          whileHover={{scale: 1.05}}
        >
            <input type='radio' {...props} id={id}/>
            <label  htmlFor={id} style={{backgroundColor:color}}> </label>
        </motion.div>
      </Tooltip>
    )
  return (
    <motion.div
      className={"radioo " + vart}
      whileHover={{scale: 1.05}}
    >
        <input type='radio' {...props} id={id}/>
        <label  htmlFor={id} style={{width:{width}}}>{label}</label>
    </motion.div>
  )
  
}

export default Radio