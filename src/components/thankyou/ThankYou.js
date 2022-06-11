import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import './ThankYou.scss';
import { useDispatch, useSelector} from 'react-redux';
import {setNext} from '../../states/user.js';

const loaderVariants = {
    animation1:{
        x : [-30, 30],
        transition: {
            x: {
                yoyo: Infinity,
                duration: 0.5,
            }
        }
    }
}

function Loader (){
    return (
        <motion.div
            className='loader'
            variants={loaderVariants}
            animate='animation1'
        >

        </motion.div>
    )
}

export default function  ThankYou({ deal, size }) {

    const dispatch = useDispatch();
    const {garment} = useSelector(state => state.user);

    useEffect(() => {
        setTimeout(() => {
            dispatch(setNext(''))
        }, 3000)
    })
    
  return (
    <div className='thank-you'>
        <h1>Thank You</h1>
        <h2>Product {garment} with size {size} has been {deal}</h2>

        <p>Redirecting back to select new item</p>
        <Loader />
    </div>
  )
}
