import React from 'react';
import Button from '../../../utilities/button/Button';
import './BeforePreview.scss';
import { useDispatch } from 'react-redux';
import { setPage } from '../../../states/admin.js';
import {motion} from 'framer-motion';

const OtherPage = () => {

  const dispatch = useDispatch()

  return (
    <motion.div initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y:0 }} exit={{ opacity: 0, y: -20 }}  transition={{delay: 0.2 }} className="beforePreview">
        <h2>Product has been added</h2>
        <div className="beforePreview-btns">
            <Button onClick={()=>dispatch(setPage(3))}  pad={12}>Preview</Button>
            <Button onClick={()=>dispatch(setPage(0))}  pad={12}>Add More</Button>
        </div>
    </motion.div>
  )
}

export default OtherPage