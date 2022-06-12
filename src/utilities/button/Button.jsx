import React from 'react';
import './button.scss';
import { motion } from 'framer-motion';

const Button = ({pad, full, children, onClick, val}) => {
  return (
    <motion.div
      id={val}
      className={'btn '+ full}
      onClick={onClick}
      style={{paddingTop: pad , paddingBottom: pad}}
      whileHover={{scale: 1.02}}
    >
      <p>
        {children} 
      </p>
    </motion.div>
  )
}

export default Button