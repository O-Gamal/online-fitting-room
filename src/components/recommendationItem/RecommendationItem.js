import React, { useState } from 'react'
import Button from '../../utilities/button/Button'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import './RecommendationItem.scss'
import { useDispatch, useSelector} from 'react-redux';
import {setNext} from '../../states/user.js';

export default function RecommendationItem({setSize, size}) {

  const [pose, setPose] = useState(0);
  // 0:T 1:I 2:A

  const [recomendedSize, setRecomendedSize] = useState('M');
  const [StandardSize, setStandardSize] = useState('L');
  
  const dispatch = useDispatch();
  const {garment} = useSelector(state => state.user);

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

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
                <Button val={0} full='pose-btn' onClick={()=> setPose(0)}> T </Button>
                    <Button val={1} full='pose-btn' onClick={()=> setPose(1)}> I </Button>
                    <Button val={2} full='pose-btn' onClick={()=> setPose(2)}> A </Button>
                </div>
            </div>
      </div>
    </div>
  )
}
