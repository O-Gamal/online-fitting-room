import React from 'react'
import Button from '../../utilities/button/Button'
import Input from '../../utilities/input/Input'
import './UserRegister.scss'

export default function UserRegister({setRegPage, regPage}) {


  const handleNext = () => {
    setRegPage(regPage + 1)
  }

  return (
    <div className='register-container'>
      <h2 className='register-title'>Enter Your Info Below:</h2>
      <Input placeholder='Name'/>
      <Input placeholder='Age' />
      <Input placeholder='Gender'/>
      <Button onClick={handleNext}> Next </Button>
    </div>
  )
}
