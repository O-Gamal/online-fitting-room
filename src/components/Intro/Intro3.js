/* eslint-disable */ 
import React from 'react'
import Button from '../../utilities/button/Button'
import { Link } from 'react-router-dom';
import Input from '../../utilities/input/Input'
import DropZone from '../../utilities/dropzone/DropZone';
import './Intro.scss';
import {useSelector, useDispatch} from 'react-redux';
import {setMeasurements, setUserPage} from '../../states/user.js';


function Manual(){

  const {measurements, Measurements} = useSelector(state => state.user);
  const dispatch = useDispatch();

  return(
      <>
        <h2>Enter Your Body Measurements:</h2>
        <div className='measurements-container'>
          {Measurements.map(measurement => 
             <Input 
             className='measure-btn' 
             key={measurement}
             type='number'
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

export default function Intro3() {

  const { measureType } = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div className='intro-container'>
      {measureType === 'Manual' ? <Manual/> : <UploadPhoto/>} 
      <Link to='/user/app'>
        <Button pad={8}> Register </Button>
      </Link>
      <Button full='blk' pad={8} onClick={()=>dispatch(setUserPage(2))}> Back </Button>
      
    </div>
  )
}
