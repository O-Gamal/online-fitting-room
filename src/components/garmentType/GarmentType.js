/* eslint-disable */ 
import React from 'react'
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
    
    const hendleSelection = (e) => {
        e.preventDefault();
        if(lowerGarment===e.target.id) return dispatch(setLowerGarment(''));
        if(upperGarment===e.target.id) return dispatch(setUpperGarment(''));
        setGarmentType(e.target.id)
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
                    <img 
                        id={gar.name} 
                        className={upperGarment === gar.name || lowerGarment === gar.name? 'clicked' : ''} 
                        key={index}
                        onClick={hendleSelection} 
                        src={`/images/icons/${gar.name}.png`} 
                        alt={gar.name}
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
