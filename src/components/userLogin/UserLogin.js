import React from 'react'
import Button from '../../utilities/button/Button'
import Input from '../../utilities/input/Input'
import './UserLogin.scss'

export default function userLogin() {
  return (
    <div className='login-container'>
      <h2 className='login-title'>Enter Your Id Below:</h2>
      <Input placeholder='User Id' type='text' className='login-input'/>
      <Button full='login-button'> Login </Button>   
    </div>
  )
}
