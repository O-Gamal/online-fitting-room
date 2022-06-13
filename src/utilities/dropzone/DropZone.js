import React, { useState } from 'react'
import { Group, Text } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE  } from '@mantine/dropzone';
import Button from '../../utilities/button/Button'
import { motion } from 'framer-motion';

import './DropZone.scss'

const dropzoneChildren = () => (
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


export default function DropZone({ className }) {

  const [image, setImage] = useState(null);

  return (
    <div>
        {image !== null ? 
      <div className='uploaded-image-container'>
        <motion.img initial={{opacity: 0}} animate={{opacity: 1}} className='uploaded-image' src={image} alt='uploaded image'/>
        <Button full='remove-btn' onClick={() => setImage(null)}><motion.i initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} className="material-icons">close</motion.i></Button>
      </div>
      : 
      <Dropzone
        loading={false}
        className={'dropzone ' + className}
        accept={IMAGE_MIME_TYPE}
        radius={30}
        onDrop={(files) => {
          setImage(URL.createObjectURL(files[0]));
        }}
        onReject={(file) => console.log('rejected files', file[0])}
        multiple={ false }
      >
      {(status) => dropzoneChildren(status)}

      </Dropzone>}
    </div>
  )
}
