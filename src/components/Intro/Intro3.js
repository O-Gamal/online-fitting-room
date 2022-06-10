/* eslint-disable */ 
import React, { useState } from 'react'
import Button from '../../utilities/button/Button'
import { Link } from 'react-router-dom';
import Input from '../../utilities/input/Input'
import DropZone from '../../utilities/dropzone/DropZone';
import './Intro.scss'


function Manual(){

  const measurements = ['height', 'weight', 'chest', 'waist', 'hips', 'arm length', 'inseam', 'neckline']

  return(
      <>
        <h2>Enter Your Body Measurements:</h2>
        <div className='measurements-container'>
          {measurements.map(measurement => {
            return <Input className='measure-btn' key={measurement} placeholder={measurement}/>
          })}
        </div>
      </>
  )
}



function UploadPhoto(){

  return(
      <>
      <h2>Upload Your Photo</h2>
      <DropZone />
      </>
  )
}

export default function Intro3({measureType, setRegPage, regPage}) {

  const handleNext = () => {
      setRegPage(regPage + 1)
  }

  const handleBack = () => {
      setRegPage(regPage - 1)
  }

  return (
    <div className='intro-container'>
      {measureType === 'Manual' ? <Manual/> : <UploadPhoto/>} 
      <Link to='/user/app'>
        <Button pad={8}> Register </Button>
      </Link>
      <Button full='blk' pad={8} onClick={handleBack}> Back </Button>
      
    </div>
  )
}
