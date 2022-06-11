/* eslint-disable */ 
import React from 'react'
import './Intro.scss'
import Button from '../../utilities/button/Button'
import Radio from '../../utilities/radio/Radio'
import { useDispatch, useSelector} from 'react-redux';
import {setFitPreference, setSkinTone, setUserPage, setMeasureType} from '../../states/user.js';

export default function Intro2() {

    const dispatch = useDispatch();
    const {fitPreferences, skinTones, measurementTypes} = useSelector(state => state.user);

    return (
        <div className='intro-container'>
            <h2 className='register-title'>Select Your Fit Preference</h2>
            <div className='radio-container'>
                {fitPreferences.map((preference, index) => {
                    return <Radio vart='radio-btn' key={index} label={preference} name='fit' value={preference} onChange={() => dispatch(setFitPreference(preference))}/>
                })}
            </div>
            <h2 className='register-title'>Select Your Skin tone</h2>
            <div className='radio-container skin-tone'>
                {skinTones.map((tone, index) => {
                    return <Radio vart='rnd' key={index} label={tone.name} name='skin' color={tone.color} value={tone.value} onChange={() => dispatch(setSkinTone(tone))}/>
                })}
            </div>
            <h2 className='register-title'>Body Measurements</h2>
            <div className='radio-container measurments'>
                {measurementTypes.map((type, index) => {
                    return <Radio vart='radio-btn' key={index} label={type} name='measurements' value={type} onChange={() => dispatch(setMeasureType(type))}/>
                })}
            </div>
            <Button onClick={()=>dispatch(setUserPage(3))} pad={8}> Next </Button>
            <Button onClick={()=>dispatch(setUserPage(1))} pad={8} full='blk'> Back </Button>
        </div>
    )
}
