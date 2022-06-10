import React, { useState } from 'react'
import items from '../../utilities/items'
import Button from '../../utilities/button/Button'
import { motion } from 'framer-motion'
import './SizeRecommendation.scss'


export default function SizeRecommendation({setNext}) {

  const [selectedGarment, setSelectedGarment] = useState('');

  return (
    <div className='size-rec-container'>
      <div className='gar-header-container'>
        <h1 className='gar-header'> Select Garment: </h1>
      </div>
      <div className='items-container'>
        {items.map((item, index) => {
          return (
            <motion.div 
              className= {selectedGarment === item.id ? 'item-container selected' : 'item-container'}
              key={index}
              whileHover={{ scale: 1.03  ,transition: { duration: 0.2 } }}
              onClick={e => setSelectedGarment(item.id)}
            >
              <img className='item-image' src={item.image} alt={item.name}/>
              {/* <div className='item-name'>{item.name}</div> */}
            </motion.div>
          )
        })}
      </div>
      <div className='btns-container'>
        <Button full='btn back-btn' onClick={()=> setNext('')}> Back </Button>
        <Button full='btn next-btn' onClick={()=> setNext('Recommendation Item')}> Next </Button>
      </div>
    </div>
  )
}
