import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './UserApp.scss'
import GarmentType from '../garmentType/GarmentType'
import Preview from '../preview/Preview'
import SizeRecommendation from '../sizeRecommendation.js/SizeRecommendation'
import RecommendationItem from '../recommendationItem/RecommendationItem'
import Rating from '../rating/Rating'
import ThankYou from '../thankyou/ThankYou'
import { useSelector, useDispatch} from 'react-redux';
import {setNext} from '../../states/user.js';

export default function UserApp() {

    const {next, user} = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [garmentType, setGarmentType] = useState({'shirt': false, 'pants': false, 'short': false, 'skirt': false});
    const [size, setSize] = useState('');
    const [deal, setDeal] = useState('');

    return (
        <AnimatePresence exitBeforeEnter>
        <motion.div
            className='app-container'

            >
            <div className='app-header'>
                <div className='welcome-user'><i className="material-icons">account_circle</i> Hello { user.name }</div>
                <nav>
                    <ul>
                        { next === '' && <li><Link to='/user/settings'><i className="material-icons">settings</i></Link></li>}
                        { next === '' && <li><Link to='/'><i className="material-icons">home</i></Link></li>}
                        { next !== '' && <li><Link to='/user/app'><i onClick={()=>dispatch(setNext(''))} className="material-icons">home</i></Link></li>}
                    </ul>
                </nav>
            </div>
            <div className='app-body'>
                {next === '' && <GarmentType setGarmentType={setGarmentType} garmentType={garmentType} />}
                {next === 'Try-On' && <Preview garmentType={garmentType}/>}
                {next === 'Size Recommendation' && <SizeRecommendation />}
                {next === 'Recommendation Item' && <RecommendationItem setSize={setSize} size={size}/>}
                {next === 'Rating' && <Rating  size={size} setDeal={setDeal}/>}
                {next === 'Thank You' && <ThankYou deal={deal} size={size}/>}
            </div>
        </motion.div>
        </AnimatePresence>
    )
}
