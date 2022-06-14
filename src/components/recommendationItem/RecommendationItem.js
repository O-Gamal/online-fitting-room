import React, { useState, useEffect } from 'react'
import Button from '../../utilities/button/Button'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import './RecommendationItem.scss'
import { useDispatch, useSelector} from 'react-redux';
import {setNext} from '../../states/user.js';
import axios from 'axios';

export default function RecommendationItem({setSize, size}) {

  const [recomendedSize, setRecomendedSize] = useState('loading...');
  const [StandardSize, setStandardSize] = useState('loading...');
  const dispatch = useDispatch();
  const {garment, user} = useSelector(state => state.user);
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  useEffect(()=>{
    axios.post('',{garment, user, pose:'T'})
    .then((res)=>res.data)
    axios.post('',{garment, user})
    .then((res)=>setRecomendedSize(res.data))
    axios.post('',{garment, user})
    .then((res)=>setStandardSize(res.data))
  },[])

  const changePose = (pose)=>{
    axios.post('',{garment, user, pose})
    .then((res)=>res.data)
  }

  const buyHandler = ()=>{
    axios.post('http://localhost:4002/api/ratings/buy',{garment, user, size})
    .then(()=>dispatch(setNext('Rating')))
  }

  return (
    <div className='recommendation-item-container'>
      <div className='left'>
        <div className='size'>
          <div>
            <h1>Standard Size: </h1>
            <p>based on size chart of the brand</p>
          </div>
          <h1>{recomendedSize}</h1>
        </div>
        <div className='size'>
          <div>
            <h1>Recommended Size: </h1>
            <p>based on what similar users buy</p>
          </div>
          <h1>{StandardSize}</h1>
        </div>
        <div className='size select-size'>
          <h1>Select Size: </h1>
          <div className='radio-container'>
            {sizes.map((s, index) => 
                <motion.h1 layout className={ s === size ? 'radio-btn selected' : 'radio-btn'} key={index} onClick={() => setSize(s)}>{s}</motion.h1>
            )}
          </div>
        </div>

        <div className='btns-container'>
          <Button full='btn back-btn' onClick={()=> dispatch(setNext('Size Recommendation'))}> Back </Button>
          <Button full='btn next-btn' onClick={()=> dispatch(setNext('Rating'))}> Buy </Button>
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
                    <Button  full='pose-btn' onClick={()=> changePose('T')}> T </Button>
                    <Button  full='pose-btn' onClick={()=> changePose('I')}> I </Button>
                    <Button  full='pose-btn' onClick={()=> changePose('A')}> A </Button>
                </div>
            </div>
      </div>
    </div>
  )
}
