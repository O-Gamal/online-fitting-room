import React from 'react';
import Button from '../../../utilities/button/Button';
import './GarmentType.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setPage, setGarType } from '../../../states/admin.js';

export default function GarmentType() {

    const {garType, garTypes} = useSelector((state) => state.admin);
    const dispatch = useDispatch()

    return (
            <div className='garType'>
                <h1 className='gar-type-header'> Select Garment Type: </h1>
                <div className='garments'>
                    {garTypes.map((gar, index) => <img id={gar} className={garType === gar ? 'clicked' : ''} key={index} onClick={(e)=>dispatch(setGarType(e.target.id))} src={`/images/icons/${gar}.png`} alt={gar}/>)}
                </div>
                <div className='gar-type-btns'>
                    <Button onClick={()=>dispatch(setPage(1))} full='gar-type-btn' pad='12px' > Next </Button>
                </div>
            </div>
  )
}
