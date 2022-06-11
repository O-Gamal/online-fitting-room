import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Main.scss';
import {useDispatch} from 'react-redux';
import { setUserPage } from '../../states/user';

export default function Main() {

  const dispatch = useDispatch();
  return (
    <motion.div layoutId='animation' className='main-container'>
        <Link className='nav admin' to='/admin'>
                <h2>Admin Side</h2>
        </Link>
        
        <Link onClick={()=>dispatch(setUserPage(1))} className='nav user' to='/user'>
            <h2>User Side</h2>
        </Link>
    </motion.div>
  )
}
