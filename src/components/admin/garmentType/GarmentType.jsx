import React, { useState } from 'react'
import Button from '../../../utilities/button/Button'
import './GarmentType.scss'

export default function GarmentType({garTypes, garType, setGarType, setPage}) {
    return (
            <div className='garType'>
                <h1 className='gar-type-header'> Select Garment Type: </h1>
                <div className='garments'>
                    {garTypes.map((gar, index) => <img id={gar} className={garType == gar ? 'clicked' : ''} key={index} onClick={(e)=>setGarType(e.target.id)} src={`/images/icons/${gar}.png`} alt={gar}/>)}
                </div>
                <div className='gar-type-btns'>
                    <Button onClick={()=>setPage(1)} full='gar-type-btn' pad='12px' > Next </Button>
                </div>
            </div>
  )
}
