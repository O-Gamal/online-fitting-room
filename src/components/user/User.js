import React from 'react'
import Intro1 from '../Intro/Intro1';
import Intro2 from '../Intro/Intro2';
import Intro3 from '../Intro/Intro3';
import { motion } from 'framer-motion';
import './User.scss';
import {useSelector} from 'react-redux';

export default function User() {

  const {userPage} = useSelector(state => state.user);
  
  return (
    <motion.div layoutId='animation' layout className='user-container'>
        {userPage === 1 && <Intro1/>}
        {userPage === 2 && <Intro2/>}
        {userPage === 3 && <Intro3/>}
    </motion.div>
  )
}
