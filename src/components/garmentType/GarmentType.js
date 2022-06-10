/* eslint-disable */ 

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../utilities/button/Button'
import './GarmentType.scss'

export default function GarmentType({setGarmentType, setNext}) {

    const navigate = useNavigate()

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

    // const handleNext = (path) => {
    //     navigate(path)
    // }


    
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
                    <Button full='gar-type-btn' onClick={()=> setNext('Try-On')}> Try-On </Button>
                    { isShirt && <Button full='gar-type-btn' onClick={()=> setNext('Size Recommendation')}> Size Recommendation </Button>}
                </div>
            </div>
        </div>
    )
}
