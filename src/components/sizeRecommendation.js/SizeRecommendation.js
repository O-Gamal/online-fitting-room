import React, {useEffect,useState} from 'react'
import items from '../../utilities/items'
import Button from '../../utilities/button/Button'
import { Tooltip } from '@mantine/core';
import { motion } from 'framer-motion'
import './SizeRecommendation.scss'
import { useDispatch, useSelector } from 'react-redux';
import {setNext, setGarment} from '../../states/user.js';
import axios from 'axios';

export default function SizeRecommendation() {

  const dispatch = useDispatch();
  const {garment} = useSelector(state => state.user);
  const [isLoading, setIsloading] = useState(true);
  const [shirts, setShirts] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:4002/api/products?size_recommendation=true')
    .then(res=>setShirts(res.data.products))
    .then(()=>setIsloading(false))
  },[])

  return (
    <div className='size-rec-container'>
      <div className='gar-header-container'>
        <h1 className='gar-header'> Select Garment: </h1>
      </div>
      <div className='items-container'>
        {isLoading && <p>loading...</p>}
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
              onClick={e => dispatch(setGarment(item.name))}
            >
              <img className='item-image' src={item.image} alt={item.name}/>
              {/* <div className='item-name'>{item.name}</div> */}
            </motion.div>
            </Tooltip>
          )
        })}
      </div>
      <div className='btns-container'>
        <Button full='btn back-btn' onClick={()=> dispatch(setNext(''))}> Back </Button>
        <Button full='btn next-btn' onClick={()=> dispatch(setNext('Recommendation Item'))}> Next </Button>
      </div>
    </div>
  )
}
