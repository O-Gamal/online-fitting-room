import React, {useState} from 'react';
import './TshirtPage.scss';
import Button from '../../../utilities/button/Button';
import Input from '../../../utilities/input/Input';
import { useDispatch,  useSelector } from 'react-redux';
import { setPage, setGeneratedGar} from '../../../states/admin.js';
import DropZone from '../../../utilities/dropzone/DropZone';
import {motion} from 'framer-motion';
import axios from 'axios';

const TshirtPage = () => {

  const dispatch = useDispatch();
  const {garType} = useSelector((state) => state.admin);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [name, setName] = useState('');

  const generateGarment = () => {
    const data = {type:garType, imgs:[image1,image2], name };
    axios.post('http://localhost:4002/api/products', data, {headers: { 'Content-Type': 'multipart/form-data' }})
        .then(response => dispatch(setGeneratedGar(response.data)))
        .then(()=>dispatch(setPage(4)))
  }
  
  return (
    <motion.div initial={{ opacity: 0, y:100 }} animate={{ opacity: 1, y:0 }} exit={{ opacity: 0, y: -100 }} transition={{velocity: 90,type: "Inertia"}} className="TshirtPage">
        <h2>Add garment details:</h2>
        <div className="TshirtPage-dropZone">
          <Input className='TshirtPage-input' placeholder='Name' value={name} onChange={e=>setName(e.target.value)}/>
          <div className="TshirtPage-drops">
            <DropZone image={image1} setImage={setImage1}/>
            <DropZone image={image2} setImage={setImage2}/>
          </div>
        </div>
        <div className="TshirtPage-btns">
          <Button onClick={()=>dispatch(setPage(0))}  pad={12} full='blk'>Back</Button>
          <Button onClick={generateGarment}  pad={12}>Add</Button>
        </div>
    </motion.div>
  )
}

export default TshirtPage