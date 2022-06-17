import React, { useState, useEffect } from 'react'
import Button from '../../utilities/button/Button'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import './RecommendationItem.scss'
import { useDispatch, useSelector} from 'react-redux';
import {setNext, setTransaction} from '../../states/user.js';
import axios from 'axios';

export default function RecommendationItem({setSize, size}) {

  const [recomendedSize, setRecomendedSize] = useState('loading...');
  const [StandardSize, setStandardSize] = useState('loading...');
  const [pose, setPose] = useState('T');
  const dispatch = useDispatch();
  const {garment, user} = useSelector(state => state.user);
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  useEffect(()=>{
    axios.post('http://localhost:4002/api/sizerecommendation/model',{product_id:garment.product_id, user_id:user.user_id})
    .then((res)=>{
      setRecomendedSize(res.data.data.size);
      setSize(res.data.data.size);
                })
    .then(()=>{
      axios.post('http://localhost:4002/api/smpl/showsmpl',
      {products_id:[garment.product_id], user_id:user.user_id, pose:'T', sizes:[recomendedSize]})
      .then((res)=>res.data)
    })
    .catch((err)=>console.error(err))
    // axios.post('',{product_id:garment.product_id, user})
    // .then((res)=>setStandardSize(res.data))
  },[])

  useEffect(()=>{
    axios.post('http://localhost:4002/api/smpl/showsmpl',
    {products_id:[garment.product_id], user_id:user.user_id, pose, sizes:[size]})
    .then((res)=>res.data) 
  },[pose, size])

  const buyHandler = ()=>{
    axios.post('http://localhost:4002/api/ratings/buy',
    {product_id:garment.product_id, user_id:user.user_id, size})
    .then(res => {dispatch(setTransaction(res.data.transaction['_id']))})
    .then(()=>dispatch(setNext('Rating')))
    .catch((err)=>console.error(err))
  }

  return (
    <div className='recommendation-item-container'>
      <div className='left'>
        <div className='size'>
          <div>
            <h1>Standard Size: </h1>
            <p>based on size chart of the brand</p>
          </div>
          <h1>{StandardSize }</h1>
        </div>
        <div className='size'>
          <div>
            <h1>Recommended Size: </h1>
            <p>based on what similar users buy</p>
          </div>
          <h1>{recomendedSize}</h1>
        </div>
        <div className='size select-size'>
          <h1>Select Size: </h1>
          <div className='radio-container'>
            {sizes.map((s, index) => 
                <motion.h1 layout className={ s === size ? 'radio-btn selected' : 'radio-btn'} key={index} onClick={() =>{ setSize(s)}}>{s}</motion.h1>
            )}
          </div>
        </div>

        <div className='btns-container'>
          <Button full='btn back-btn' onClick={()=> dispatch(setNext('Size Recommendation'))}> Back </Button>
          <Button full='btn next-btn' onClick={buyHandler}> Buy </Button>
        </div>
      </div>
      <div className='right'>
      <div className='canvas-container'>
                <Canvas className='canvas'>
                    <mesh>
                        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                        <meshBasicMaterial attach="material" color="red" />
                        
                    </mesh>
                    <OrbitControls />
                </Canvas>
                <div className='pose-btns'>
                    <Button  full='pose-btn' onClick={()=> setPose('T')}> T </Button>
                    <Button  full='pose-btn' onClick={()=> setPose('I')}> I </Button>
                    <Button  full='pose-btn' onClick={()=> setPose('A')}> A </Button>
                </div>
            </div>
      </div>
    </div>
  )
}
