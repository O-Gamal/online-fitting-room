/* eslint-disable */ 
import React, { useState } from 'react'
import Button from '../../utilities/button/Button'
import './GarmentType.scss';
import { useDispatch } from 'react-redux';
import {setNext} from '../../states/user.js';

export default function GarmentType({setGarmentType}) {

    const dispatch = useDispatch();

    const garTypes = ['shirt', 'pants', 'short', 'skirt']
    
    const [garType, setGarType] = useState('')
    const [isShirt, setIsShirt] = useState(false)

    const hendleSelection = (e) => {
        console.log(e.target.id)
        setGarType(e.target.id)
        setGarmentType(e.target.id)

        if(e.target.id === 'shirt') {
            setIsShirt(true)
        }else{
            setIsShirt(false)
        }

    }
  
    return (
        <div className='gar-type-container'>
            <div className='gar-type-header'>
                <h1 className='gar-type-header'> Select Garment Type: </h1>
            </div>
            <div className='gar-type-body'>
                <div className='garments'>
                    {garTypes.map((gar, index) => <img id={gar} className={garType == gar ? 'clicked' : ''} key={index} onClick={hendleSelection} src={`/images/icons/${gar}.png`} alt={gar}/>)}
                </div>
                <div className='gar-type-btns'>
                    <Button full='gar-type-btn' onClick={()=> dispatch(setNext('Try-On'))}> Try-On </Button>
                    { isShirt && <Button full='gar-type-btn' onClick={()=> dispatch(setNext('Size Recommendation'))}> Size Recommendation </Button>}
                </div>
            </div>
        </div>
    )
}
