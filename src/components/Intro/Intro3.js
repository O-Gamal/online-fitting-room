import React, { useState } from 'react'
import { Group, Text, useMantineTheme, MantineTheme } from '@mantine/core';
import { Dropzone, DropzoneStatus, IMAGE_MIME_TYPE  } from '@mantine/dropzone';
import { Link } from 'react-router-dom';
import Button from '../../utilities/button/Button'
import Input from '../../utilities/input/Input'
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



function UploadPhoto(){

  const [image, setImage] = useState(null);
  console.log(image);

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
        <Button> Register </Button>
      </Link>
      <Button full='back-btn' onClick={handleBack}> Back </Button>
      
    </div>
  )
}
