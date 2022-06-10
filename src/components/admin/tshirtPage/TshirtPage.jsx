/* eslint-disable*/
import React, { useState } from 'react';
import './TshirtPage.scss';
import { Group, Text} from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE  } from '@mantine/dropzone';
import Button from '../../../utilities/button/Button'
import Input from '../../../utilities/input/Input'

const TshirtPage = ({setPage}) => {

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const dropzoneChildren = (DropzoneStatus) => (
    
    <Group position="center" style={{ minHeight: 150, pointerEvents: 'none', minWidth:400 }}>
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

  return (
    <div className="TshirtPage">
        <h2>Add garment details:</h2>
        <div className="TshirtPage-dropZone">
          <Input className='TshirtPage-input' placeholder='Name' />
          <div className="TshirtPage-drops">
            <Dropzone
              loading={false}
              className='dropzone'
              accept={IMAGE_MIME_TYPE}
              radius={30}
              onDrop={(file) => setImage1(file[0])}
              onReject={(file) => console.log('rejected files', file[0])}
              multiple={false}
            >
              {(status) => dropzoneChildren(status)}
            </Dropzone>
            <Dropzone
              loading={false}
              className='dropzone'
              accept={IMAGE_MIME_TYPE}
              radius={30}
              onDrop={(file) => setImage2(file[0])}
              onReject={(file) => console.log('rejected files', file[0])}
              multiple={false}
            >
              {(status) => dropzoneChildren(status)}
            </Dropzone>
          </div>
        </div>
        <div className="TshirtPage-btns">
          <Button onClick={()=>setPage(0)}  pad={12} full='blk'>Back</Button>
          <Button onClick={()=>setPage(2)}  pad={12}>Add</Button>
        </div>
    </div>
  )
}

export default TshirtPage