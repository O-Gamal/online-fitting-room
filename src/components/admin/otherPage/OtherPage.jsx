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
    <motion.div initial={{ opacity: 0, y:100 }} animate={{ opacity: 1, y:0 }} exit={{ opacity: 0, y: -100 }} transition={{velocity: 90,type: "Inertia"}} className="TshirtPage">
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
            <Button onClick={()=>dispatch(setPage(3))}  pad={12}>Add</Button>
        </div>
    </motion.div>
  )
}

export default OtherPage