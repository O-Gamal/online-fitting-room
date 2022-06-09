import React, { useState } from 'react'
import Intro1 from '../Intro/Intro1';
import Intro2 from '../Intro/Intro2';
import Intro3 from '../Intro/Intro3';
import { motion } from 'framer-motion';
import './User.scss'

export default function User() {
    
  const [regPage, setRegPage] = useState(1)
  const [measureType, setMeasureType] = useState('Manual')

  return (
    <motion.div layout className='user-container'>
        {regPage === 1 && <Intro1 regPage={regPage} setRegPage={setRegPage}/>}
        {regPage === 2 && <Intro2 setMeasureType={setMeasureType} regPage={regPage} setRegPage={setRegPage}/>}
        {regPage === 3 && <Intro3 measureType={measureType} regPage={regPage} setRegPage={setRegPage}/>}
        
    </motion.div>
  )
}
