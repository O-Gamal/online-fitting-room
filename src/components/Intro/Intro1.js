import React, { useState } from 'react'
import { motion} from 'framer-motion';
import UserLogin from '../userLogin/UserLogin';
import UserRegister from '../userRegister/UserRegister';

export default function Intro1() {

  const [tab, setTab] = useState(0);

  return (
    <motion.div className='intro-container'>
      <motion.div className='taps-container'>
        <div className= {tab === 0 ? "tap login-tap active" : "tap login-tap"} onClick={()=>setTab(0)}>Login</div>
        <div className= {tab === 1 ?'tap register-tap active' : "tap register-tap"} onClick={()=>setTab(1)}>Register</div>
        <motion.div
          className='active-tap tap'
          initial={{ left: 0 }}
          animate={{ left: tab === 0 ? '0%' : '50%' }}
          transition={{ ease: "easeOut" , type: 'spring', duration: 0.3 }}
        ></motion.div>
      </motion.div>
        { tab === 0 && <UserLogin />}
        { tab === 1 && <UserRegister />}
    </motion.div>
  )
}
