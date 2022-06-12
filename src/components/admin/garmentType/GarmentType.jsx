import React from 'react';
import Button from '../../../utilities/button/Button';
import './GarmentType.scss';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { setPage, setGarType } from '../../../states/admin.js';

export default function GarmentType() {

    const {garType, garTypes} = useSelector((state) => state.admin);
    const dispatch = useDispatch()

    return (
            <motion.div initial={{ opacity: 0, x:-100 }} animate={{ opacity: 1, x:0 }} exit={{ opacity: 0, x: 100 }} transition={{velocity: 90,type: "Inertia"}}   className='garType'>
                <h1 className='gar-type-header'> Select Garment Type: </h1>
                <div className='garments'>
                    {garTypes.map((gar, index) => <img id={gar} className={garType === gar ? 'clicked' : ''} key={index} onClick={(e)=>dispatch(setGarType(e.target.id))} src={`/images/icons/${gar}.png`} alt={gar}/>)}
                </div>
                <div className='gar-type-btns'>
                    <Button onClick={()=>dispatch(setPage(1))} full='gar-type-btn' pad='12px' > Next </Button>
                </div>
            </motion.div>
  )
}
