import React, { useState } from 'react'
import { NativeSelect } from '@mantine/core';
import './Intro.scss'
import Button from '../../utilities/button/Button'
import Input from '../../utilities/input/Input'
import Radio from '../../utilities/radio/Radio'
import { Chips, Chip } from '@mantine/core';


export default function Intro2({regPage, setRegPage, setMeasureType}) {

    const [preference, setPreference] = useState('Perfect');
    const [skinTone, setSkinTone] = useState('White');
    const [measurementsType, setMeasurementsType] = useState('Manual');

    const handleNext = () => {
        setRegPage(regPage + 1)
        setMeasureType(measurementsType)
    }

    const handleBack = () => {
        setRegPage(regPage - 1)
    }

    const fitPreferences = ['Looser', 'Perfect', 'Tighter'];
    const skinTones = ['African', 'Hispanic', 'Indian', 'Seasian', 'Midset', 'Asian', 'White'];
    const measurementTypes = ['Manual', 'Upload Photo'];

    return (
        <div className='intro-container'>
            <h2 className='register-title'>Select Your Fit Preference</h2>
            <div className='radio-container'>
                {fitPreferences.map((preference, index) => {
                    return <Radio vart='radio-btn' key={index} label={preference} name='fit' value={preference} onChange={() => setPreference(preference)}/>
                })}
            </div>
            <h2 className='register-title'>Select Your Skin tone</h2>
            <div className='radio-container skin-tone'>
                {skinTones.map((tone, index) => {
                    return <Radio vart='radio-btn' key={index} label={tone} name='skin' value={tone} onChange={() => setSkinTone(tone)}/>
                })}
            </div>
            <h2 className='register-title'>Body Measurements</h2>
            <div className='radio-container measurments'>
                {measurementTypes.map((type, index) => {
                    return <Radio vart='radio-btn' key={index} label={type} name='measurements' value={type} onChange={() => setMeasurementsType(type)}/>
                })}
            </div>
            <Button onClick={handleNext}> Next </Button>
            <Button full='back-btn' onClick={handleBack}> Back </Button>
        </div>
    )
}
