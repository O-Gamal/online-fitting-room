import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Main.scss'

export default function Main() {
  return (
    <motion.div layoutId='animation' className='main-container'>
        <Link className='nav admin' to='/admin'>
                <h2>Admin Side</h2>
        </Link>
        
        <Link className='nav user' to='/user'>
            <h2>User Side</h2>
        </Link>
    </motion.div>
  )
}
