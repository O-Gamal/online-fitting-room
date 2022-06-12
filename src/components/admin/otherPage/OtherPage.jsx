import React, { useState } from 'react';
import { ColorInput } from '@mantine/core';
import Button from '../../../utilities/button/Button';
import Input from '../../../utilities/input/Input';
import './OtherPage.scss';
import { useDispatch } from 'react-redux';
import { setPage} from '../../../states/admin.js';
import { motion } from 'framer-motion';

const OtherPage = () => {

  const [color, setColor] = useState('');
  const dispatch = useDispatch()

  return (
    <motion.div initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y:0 }} exit={{ opacity: 0, y: -20 }}  transition={{delay: 0.2 }} className="TshirtPage">
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
            <Button onClick={()=>dispatch(setPage(0))}  pad={12} full='blk'>Back</Button>
            <Button onClick={()=>dispatch(setPage(2))}  pad={12}>Add</Button>
        </div>
    </motion.div>
  )
}

export default OtherPage