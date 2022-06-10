/* eslint-disable */ 
import React, { useState } from 'react'
import { Group, Text, useMantineTheme, MantineTheme } from '@mantine/core';
import { Dropzone, DropzoneStatus, IMAGE_MIME_TYPE  } from '@mantine/dropzone';
import { Link } from 'react-router-dom';
import { FileUploader } from "react-drag-drop-files";
import Button from '../../utilities/button/Button'
import Input from '../../utilities/input/Input'
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

const dropzoneChildren = (DropzoneStatus) => (
  <Group position="center" style={{ minHeight: 200, pointerEvents: 'none', minWidth:400 }}>
    <div>
      <Text size="xl" inline>
        Drag your image here
      </Text>
      <Text size="l" color="dimmed" inline mt={12}>
        or click to select file
      </Text>
    </div>
  </Group>
);

const fileTypes = ["JPG", "PNG", "GIF"];

function UploadPhoto(){

  const [image, setImage] = useState(null);
  console.log(image);

  const handleChange = (file) => {
    setImage(file);
  };

  return(
      <>
      <h2>Upload Your Photo</h2>
      <Dropzone
        loading={false}
        className='dropzone'
        accept={IMAGE_MIME_TYPE}
        radius={30}
        onDrop={(file) => setImage(file[0])}
        onReject={(file) => console.log('rejected files', file[0])}
        multiple={false}
      >
      {(status) => dropzoneChildren(status)}

      </Dropzone>
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
