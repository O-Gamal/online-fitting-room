import React from 'react'
import items from '../../utilities/items'
import Button from '../../utilities/button/Button'
import { Tooltip } from '@mantine/core';
import { motion } from 'framer-motion'
import './SizeRecommendation.scss'


export default function SizeRecommendation({setNext, setGarment, garment}) {


  return (
    <div className='size-rec-container'>
      <div className='gar-header-container'>
        <h1 className='gar-header'> Select Garment: </h1>
      </div>
      <div className='items-container'>
        {items.map((item, index) => {
          return (
            <Tooltip
              key={index}
              withArrow
              label={item.name}
              transition="fade"
              transitionDuration={300}
              openDelay={500}
            >
            <motion.div 
              className= {garment === item.name ? 'item-container selected' : 'item-container'}
              whileHover={{ scale: 1.1  ,transition: { duration: 0.3 } }}
              onClick={e => setGarment(item.name)}
            >
              <img className='item-image' src={item.image} alt={item.name}/>
              {/* <div className='item-name'>{item.name}</div> */}
            </motion.div>
            </Tooltip>
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
