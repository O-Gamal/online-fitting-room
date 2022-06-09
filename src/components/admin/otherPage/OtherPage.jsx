import React, { useState } from 'react';
import { ColorInput } from '@mantine/core';
import Button from '../../../utilities/button/Button';
import Input from '../../../utilities/input/Input';
import './OtherPage.scss'

const OtherPage = ({setPage}) => {

const [color, setColor] = useState('');

  return (
    <div className="TshirtPage">
        <h2>Add garment color:</h2>
        <div className="TshirtPage-dropZone">
            <Input className='TshirtPage-input' placeholder='Name' />
            <ColorInput  
            placeholder="Color"
            value={color} 
            onChange={setColor}  
            classNames={{
              icon: 'iconColor',
              input: 'inputColor',
            }}
            />
        </div>
        <div className="TshirtPage-btns">
            <Button onClick={()=>setPage(0)} full='full' pad={12}>Back</Button>
            <Button onClick={()=>setPage(2)} full='full' pad={15}>Add</Button>
        </div>
    </div>
  )
}

export default OtherPage