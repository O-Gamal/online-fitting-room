/* eslint-disable*/
import React, {useState} from 'react';
import './UploadTexture.scss';
import Button from '../../../utilities/button/Button';
import Input from '../../../utilities/input/Input';
import { useDispatch,  useSelector } from 'react-redux';
import { setPage, setGeneratedGar} from '../../../states/admin.js';
import DropZone from '../../../utilities/dropzone/DropZone';
import {motion} from 'framer-motion';
import axios from 'axios';

const UploadTexture = () => {
  
  const dispatch = useDispatch();
  const {garType, garGender} = useSelector((state) => state.admin);
  const [image, setImage] = useState(null)
  const [name, setName] = useState('')
  

  
  const generateGarment = () => {
    const data = { garGender, type:garType, name,  };
    for(const key in data) image.set(key,data[key])
  
    axios.post('http://localhost:4002/api/products', image)
        .then(response => dispatch(setGeneratedGar(response.data)))
        .then(()=>dispatch(setPage(4)))
        .catch(error=>console.log(error))
  }

  return (
    <motion.div initial={{ opacity: 0, y:100 }} animate={{ opacity: 1, y:0 }} exit={{ opacity: 0, y: -100 }} transition={{velocity: 90,type: "Inertia"}} className="UploadTexture">
        <h2>Add garment details:</h2>
        <div className="UploadTexture-dropZone">
          <Input className='UploadTexture-input' placeholder='Name' value={name} onChange={e=>setName(e.target.value)}/>
          <div className="UploadTexture-drops">
            <DropZone image={image} setImage={setImage}/>
          </div>
        </div>
        <div className="UploadTexture-btns">
          <Button onClick={()=>dispatch(setPage(0))}  pad={12} full='blk'>Back</Button>
          <Button onClick={generateGarment}  pad={12}>Add</Button>
        </div>
    </motion.div>
  )
}

export default UploadTexture;