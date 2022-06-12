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
    <motion.div initial={{ opacity: 0, y:100 }} animate={{ opacity: 1, y:0 }} exit={{ opacity: 0, y: -100 }} transition={{velocity: 90,type: "Inertia"}} className="TshirtPage">
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
          <Button onClick={()=>dispatch(setPage(3))}  pad={12}>Add</Button>
        </div>
    </motion.div>
  )
}

export default TshirtPage