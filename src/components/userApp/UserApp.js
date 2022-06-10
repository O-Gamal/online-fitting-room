import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './UserApp.scss'
import GarmentType from '../garmentType/GarmentType'
import Preview from '../preview/Preview'
import SizeRecommendation from '../sizeRecommendation.js/SizeRecommendation'
import RecommendationItem from '../recommendationItem/RecommendationItem'
import Rating from '../rating/Rating'
import ThankYou from '../thankyou/ThankYou'


export default function UserApp({name}) {

    const [garmentType, setGarmentType] = useState('')
    const [garment, setGarment] = useState('')
    const [next, setNext] = useState('')
    const [size, setSize] = useState('');
    const [deal, setDeal] = useState('');

    return (
        <motion.div layoutId='animation' className='app-container'>
            <div className='app-header'>
                <div className='welcome-user'> Hello { name }</div>
                <nav>
                    <ul>
                        <li><Link to='/user/settings'><i className="material-icons">settings</i></Link></li>
                        { next === '' && <li><Link to='/'><i className="material-icons">home</i></Link></li>}
                        { next !== '' && <li><Link to='/user/app'><i onClick={()=>setNext('')} className="material-icons">home</i></Link></li>}
                    </ul>
                </nav>
            </div>
            <div className='app-body'>
                {next === '' && <GarmentType setGarmentType={setGarmentType} setNext={setNext}/>}
                {next === 'Try-On' && <Preview setNext={setNext} garmentType={garmentType}/>}
                {next === 'Size Recommendation' && <SizeRecommendation setNext={setNext} setGarment={setGarment} garment={garment}/>}
                {next === 'Recommendation Item' && <RecommendationItem setNext={setNext} garment={garment} setSize={setSize} size={size}/>}
                {next === 'Rating' && <Rating setNext={setNext} garment={garment} size={size} setDeal={setDeal}/>}
                {next === 'Thank You' && <ThankYou deal={deal} setNext={setNext} garment={garment} size={size}/>}
            </div>
        </motion.div>
    )
}
