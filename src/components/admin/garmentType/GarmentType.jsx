import React from 'react';
import Button from '../../../utilities/button/Button';
import Input from '../../../utilities/input/Input';
import './GarmentType.scss';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { setPage, setGarType, setGarGender } from '../../../states/admin.js';

export default function GarmentType() {

    const {garType, garTypes} = useSelector((state) => state.admin);
    const dispatch = useDispatch() 

    return (
            <motion.div initial={{ opacity: 0, y:100 }} animate={{ opacity: 1, y:0 }} exit={{ opacity: 0, y: -100 }} transition={{velocity: 90,type: "Inertia"}} className='garType'>
                <h1 className='gar-type-header'> Select Garment Type: </h1>
                <div className='garments'>
                    {garTypes.map((gar, index) => <img id={gar} className={garType === gar ? 'clicked' : ''} key={index} onClick={(e)=>dispatch(setGarType(e.target.id))} src={`/images/icons/${gar}.png`} alt={gar}/>)}
                </div>
                <Input  placeholder='gender' type="text" className='genderInput' onChange={e=>dispatch(setGarGender(e.target.value))}/>
                <div className={'gar-type-btns ' +  (garType==='t-shirt'?'garType2btns':'')}>
                    <Button onClick={()=>dispatch(setPage(1))} full='gar-type-btn' pad='12px' > Add color </Button>
                    <Button onClick={()=>dispatch(setPage(2))} full='gar-type-btn' pad='12px' > Add texture </Button>
                    { garType==='t-shirt' && <Button onClick={()=>dispatch(setPage(3))} full='gar-type-btn' pad='12px' > Add Photos </Button>}
                </div>
            </motion.div>
  )
}
