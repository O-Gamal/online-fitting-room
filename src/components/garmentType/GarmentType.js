/* eslint-disable */ 
import React, { useState } from 'react'
import Button from '../../utilities/button/Button'
import './GarmentType.scss';
import { useDispatch, useSelector } from 'react-redux';
import {setNext, setUpperGarment, setLowerGarment} from '../../states/user.js';

export default function GarmentType({setGarmentType}) {

    const dispatch = useDispatch();
    const {lowerGarment, upperGarment} = useSelector(state => state.user);

    const garTypes = [
            {name: 'shirt',type: 'upper'},
            {name: 'pants',type: 'lower'},
            {name: 'short',type: 'lower'},
            {name: 'skirt',type: 'lower'}
    ];
    
    const [garType, setGarType] = useState('')
    const [isShirt, setIsShirt] = useState(false)

    const hendleSelection = (e) => {
        console.log(e.target.id)
        setGarmentType(e.target.id)
        if(e.target.id === 'shirt') {
            setIsShirt(true);
            dispatch(setUpperGarment(e.target.id));
        }else{
            setIsShirt(false);
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
                    <img 
                        id={gar.name} 
                        className={upperGarment == gar.name || lowerGarment == gar.name? 'clicked' : ''} 
                        key={index}
                        onClick={hendleSelection} 
                        src={`/images/icons/${gar.name}.png`} 
                        alt={gar.name}
                    />)}
                </div>
                <div className='gar-type-btns'>
                    <Button full='gar-type-btn' onClick={()=> dispatch(setNext('Try-On'))}> Try-On </Button>
                    { isShirt && <Button full='gar-type-btn' onClick={()=> dispatch(setNext('Size Recommendation'))}> Size Recommendation </Button>}
                </div>
            </div>
        </div>
    )
}
