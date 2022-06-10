import React, { useState } from 'react'
import { motion, AnimatePresence  } from 'framer-motion'
import Button from '../../utilities/button/Button'
import Input from '../../utilities/input/Input'
import './Rating.scss'

function Rate ({setNext, setDeal}) {
    const [rating, setRating] = useState();

    return(

            <motion.div  
                className='rate-container'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
            >
                <h2>Please, rate the product size</h2>
                <div className='rate-input-container'>
                    <Input className='rate-input' placeholder='Rate / 5' onChange={(e) => setRating(e.target.value)}/>
                    <Button full='rate-btn' onClick={() => {setNext('Thank You'); setDeal('rated')}}>Submit</Button>
                </div>
            </motion.div>
        
    )

}

export default function Rating({garment, size, setNext, setDeal}) {
  
    const [showRating, setShowRating] = useState(false);

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
        <motion.p layout transition={{ type:'tween', duration: 0.1 }} className='rate' onClick={()=> setShowRating(!showRating)}> { showRating ? 'Cancel Rating' : 'Rate the product'} </motion.p>
        {showRating && <Rate setNext={setNext} setDeal={setDeal}/>}
        </AnimatePresence>
        <motion.div layout transition={{ duration: 0.1 }} className='rating-buttons'>
            <Button onClick={() => {setNext('Thank You'); setDeal('returned')}}> Return the Product </Button>
            <Button onClick={() => setNext('')}> Buy More! </Button>
        </motion.div>
    </div>
  )
}
