import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './UserSettings.scss'
import {useSelector, useDispatch} from 'react-redux';
import {setMeasurements, setFitPreference} from '../../states/user.js';
import {setSkinTone} from '../../states/user.js';

import Input from '../../utilities/input/Input';
import Button from '../../utilities/button/Button';
import Radio from '../../utilities/radio/Radio'
import DropZone from '../../utilities/dropzone/DropZone';

export default function UserSettings() {

    const {measurements, Measurements, fitPreferences, skinTones} = useSelector(state => state.user);

    const [measurementState, setMeasurementsState] = useState(measurements);
    const [fitPreferencesState, setFitPreferencesState] = useState(fitPreferences);
    const [skinTonesState, setSkinTonesState] = useState(skinTones);

    const dispatch = useDispatch();

    const handleUpdate = () => {
        dispatch(setMeasurements(measurementState));
        dispatch(setFitPreference(fitPreferencesState));
        dispatch(setSkinTone(skinTonesState));
    }

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                className='settings-container'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                exit={{ opacity: 0 }}
                >
                <motion.div
                className='settings-header'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    <h1>Please, update filds you want to change only</h1>
                </motion.div>
                <div className='settings-body'>
                    <div className='settings-body-measurements section'>
                        <h2>Update your body measurements</h2>
                        <div className='body-measurements-inputs'>
                            {Measurements.map(measurement => 
                                <Input 
                                className='measure-btn' 
                                key={measurement}
                                type='number'
                                placeholder={measurement} 
                                value={measurements[measurement]} 
                                onChange={e => setMeasurementsState({...measurementState, [measurement] : e.target.value})}
                                />
                            )}
                        </div>
                    </div>
                    <div className='settings-photo section'>
                        <h2>Update your photo</h2>
                        <DropZone className='settings-drop'/>
                    </div>
                    <div className='settings-fit-preference section'>
                        <h2>Update your fit preference and skin tone</h2>
                        <div className='radio-container'>
                            {fitPreferences.map((preference, index) => {
                                return <Radio vart='radio-btn' key={index} label={preference} name='fit' value={preference} onChange={() => setFitPreferencesState(preference)}/>
                            })}
                        </div>
                        <div className='radio-container skin-tone'>
                            {skinTones.map((tone, index) => {
                                return <Radio vart='rnd' key={index} label={tone.name} name='skin' color={tone.color} value={tone.value} onChange={() => setSkinTonesState(tone)}/>
                            })}
                        </div>
                    </div>
                </div>
                <div className='btns-container'>
                    <Link className='btns' to='/user/app'>
                        <Button full='btn cancel-btn' >Cancel</Button>
                        <Button full='btn Save-btn' onClick={handleUpdate}>Update</Button>
                    </Link>
                </div>
            </motion.div>
            </AnimatePresence>
    )
}
