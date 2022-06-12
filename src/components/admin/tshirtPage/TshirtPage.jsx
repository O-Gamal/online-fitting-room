/* eslint-disable*/
import React from 'react';
import './TshirtPage.scss';
import Button from '../../../utilities/button/Button';
import Input from '../../../utilities/input/Input';
import { useDispatch } from 'react-redux';
import { setPage} from '../../../states/admin.js';
import DropZone from '../../../utilities/dropzone/DropZone';
import {motion} from 'framer-motion';


const TshirtPage = () => {

  const dispatch = useDispatch();

  return (
    <motion.div initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y:0 }} exit={{ opacity: 0, y: -20 }}  transition={{delay: 0.2 }} className="TshirtPage">
        <h2>Add garment details:</h2>
        <div className="TshirtPage-dropZone">
          <Input className='TshirtPage-input' placeholder='Name' />
          <div className="TshirtPage-drops">
            <DropZone />
            <DropZone />
          </div>
        </div>
        <div className="TshirtPage-btns">
          <Button onClick={()=>dispatch(setPage(0))}  pad={12} full='blk'>Back</Button>
          <Button onClick={()=>dispatch(setPage(2))}  pad={12}>Add</Button>
        </div>
    </motion.div>
  )
}

export default TshirtPage