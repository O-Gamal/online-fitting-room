import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './UserApp.scss'
import GarmentType from '../garmentType/GarmentType'
import Preview from '../preview/Preview'
import SizeRecommendation from '../sizeRecommendation.js/SizeRecommendation'
import RecommendationItem from '../recommendationItem/RecommendationItem'

export default function UserApp({name}) {

    const [garmentType, setGarmentType] = useState('')
    const [next, setNext] = useState('')


    return (
        <div className='app-container'>
            <div className='app-header'>
                <div className='welcome-user'> Hello { name }</div>
                <nav>
                    <ul>
                        <li><Link to='/user/settings'><i className="material-icons">settings</i></Link></li>
                        <li><Link to='/'><i className="material-icons">home</i></Link></li>
                    </ul>
                </nav>
            </div>
            <div className='app-body'>
                {next === '' && <GarmentType setGarmentType={setGarmentType} setNext={setNext}/>}
                {next === 'Try-On' && <Preview setNext={setNext} garmentType={garmentType}/>}
                {next === 'Size Recommendation' && <SizeRecommendation setNext={setNext}/>}
                {next === 'Recommendation Item' && <RecommendationItem setNext={setNext}/>}
            </div>
        </div>
    )
}
