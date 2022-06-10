/* eslint-disable */ 
import React, { useState } from 'react'
import Button from '../../utilities/button/Button'
import { Link } from 'react-router-dom';
import Input from '../../utilities/input/Input'
import DropZone from '../../utilities/dropzone/DropZone';
import './Intro.scss';
import {useSelector, useDispatch} from 'react-redux';
import {setMeasurements} from '../../states/user.js';


function Manual(){

  const Measurements = ['height', 'weight', 'chest', 'waist', 'hips', 'arm_length', 'inseam', 'neckline'];

  const {measurements} = useSelector(state => state.user);
  const dispatch = useDispatch();

  return(
      <>
        <h2>Enter Your Body Measurements:</h2>
        <div className='measurements-container'>
          {Measurements.map(measurement => 
             <Input 
             className='measure-btn' 
             key={measurement} 
             placeholder={measurement} 
             value={measurements[measurement]} 
             onChange={e => dispatch(setMeasurements({...measurements, [measurement] : e.target.value}))}
             />
          )}
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
