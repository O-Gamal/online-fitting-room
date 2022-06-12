import React from 'react'
import Button from '../../utilities/button/Button'
import { motion } from 'framer-motion'
import Input from '../../utilities/input/Input'
import './UserLogin.scss'

export default function userLogin() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0}}
      animate={{ x: 0, opacity: 1 }}
      className='login-container' >
      <h2 className='login-title'>Enter Your Id Below:</h2>
      <Input placeholder='User Id' type='text' className='login-input'/>
      <Button full='login-button'> Login </Button>   
    </motion.div>
  )
}
