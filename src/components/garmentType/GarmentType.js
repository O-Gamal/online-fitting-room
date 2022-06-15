/* eslint-disable */ 
import React from 'react'
import Button from '../../utilities/button/Button'
import './GarmentType.scss';
import { useDispatch, useSelector } from 'react-redux';
import {setNext, setUpperGarment, setLowerGarment} from '../../states/user.js';
import { motion } from 'framer-motion';

export default function GarmentType() {

    const dispatch = useDispatch();
    const {lowerGarment, upperGarment} = useSelector(state => state.user);

    const garTypes = [
            {name: 'shirt'},
            {name: 'pants'},
            {name: 'short'},
            {name: 'skirt'}
    ];
    
    const hendleSelection = (e) => {
        e.preventDefault();
        if(lowerGarment===e.target.id) return dispatch(setLowerGarment(''));
        if(upperGarment===e.target.id) return dispatch(setUpperGarment(''));
        if(e.target.id === 'shirt') {
            dispatch(setUpperGarment(e.target.id));
        }else{
            dispatch(setLowerGarment(e.target.id));
        }
    }
  
    return (
        <div className='gar-type-container'>
            <div className='gar-type-header'>
                <h1 className='gar-type-header'> Select Garment Type: </h1>
            </div>
            <div className='gar-type-body'>
                <div className='garments'>
                    {garTypes.map((gar, index) => 
                    <motion.img 
                        id={gar.name} 
                        key={index}
                        onClick={hendleSelection} 
                        src={`/images/icons/${gar.name}.png`} 
                        alt={gar.name}
                        initial={{ opacity: 0, y:100 }}
                        animate={{  opacity: 1,
                            y:0,
                            scale: upperGarment === gar.name || lowerGarment === gar.name? 1.05 : 1,
                        }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{velocity: 90,type: "Inertia"}}
                        className={upperGarment === gar.name || lowerGarment === gar.name? 'clicked' : ''} 
                    />)}
                </div>
                <div className='gar-type-btns'>
                    { (upperGarment || lowerGarment) && <Button full='gar-type-btn' onClick={()=> dispatch(setNext('Try-On'))}> Try-On </Button> }
                    { upperGarment && !lowerGarment && <Button full='gar-type-btn' onClick={()=> dispatch(setNext('Size Recommendation'))}> Size Recommendation </Button>}
                </div>
            </div>
        </div>
    )
}
