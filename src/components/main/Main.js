import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Main.scss';
import {useDispatch} from 'react-redux';
import { setUserPage } from '../../states/user';

export default function Main() {

  const dispatch = useDispatch();
  return (
    <motion.div
      className='main-container'
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
    >
        <Link to='/admin' className='nav-container'>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            className='nav admin'>
            <h2>Admin Side</h2>
          </motion.div>
        </Link>
        
        <Link onClick={()=>dispatch(setUserPage(1))} to='/user' className='nav-container'>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className='nav user'>
            <h2>User Side</h2>
          </motion.div>
        </Link>
    </motion.div>
  )
}
