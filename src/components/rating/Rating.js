/* eslint-disable */
import React, { useState } from 'react'
import { motion, AnimatePresence  } from 'framer-motion'
import Button from '../../utilities/button/Button'
import './Rating.scss';
import { useDispatch, useSelector} from 'react-redux';
import {setNext} from '../../states/user.js';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios';

function Rate ({setDeal}) {

    const [rating, setRating] = useState();
    const dispatch = useDispatch();

    const rateHandler = () => {
        axios.patch('http://localhost:4002/api/ratings/rate', {user, garment, rating})
            .then(()=>{
                dispatch(setNext('Thank You')); 
                setDeal('rated')
            })
    }
    return(
            <motion.div  
                className='rate-container'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
            >
                <h2>Please, rate the product size</h2>
                <div className='rate-input-container'>
                    <Rating 
                        className='rate-input' 
                        value={rating} 
                        onChange={(event, newValue)=>{setRating(newValue)}}
                        precision={0.5} 
                        emptyIcon={<StarIcon style={{ color: 'white' }}/>}
                    />
                    <Button full='rate-btn' onClick={() => {dispatch(setNext('Thank You')); setDeal('rated')}}>Submit</Button>
                </div>
            </motion.div>
    )
}

export default function MyRating({size, setDeal}) {
  
    const [showRating, setShowRating] = useState(false);
    const dispatch = useDispatch();
    const {garment} = useSelector(state => state.user);

    const returnHandler = () => {
        axios.patch('http://localhost:4002/api/ratings/return', {user, garment})
        .then(()=>{
            dispatch(setNext('Thank You')); 
            setDeal('returned');
        })
    }

    return (
    <div className='rating-container' >
        <AnimatePresence exitBeforeEnter>
        <motion.div
            layout
            className='rating-header'
            transition={{ duration: 0.1 }}
            >
            <h2>You have purchased</h2>
            <h1>{garment} with size {size}</h1>
        </motion.div>
        <motion.p layout transition={{ type:'tween', duration: 0.1 }} className='rate' onClick={()=> setShowRating(!showRating)}> { showRating ? 'Cancel Rating' : 'Rate the Product Size'} </motion.p>
        {showRating && <Rate setNext={setNext} setDeal={setDeal}/>}
        </AnimatePresence>
        <motion.div layout transition={{ duration: 0.1 }} className='rating-buttons'>
            <Button onClick={() => {dispatch(setNext('Thank You')); setDeal('returned');}}> Return the Product </Button>
            <Button onClick={() => dispatch(setNext(''))}> Buy More! </Button>
        </motion.div>
    </div>
  )
}
