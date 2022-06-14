/* eslint-disable */ 
import React, { useState, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Button from '../../utilities/button/Button'
import { motion }  from 'framer-motion'
import './Preview.scss'
import items from '../../utilities/items'
import { useDispatch, useSelector} from 'react-redux';
import {setNext} from '../../states/user.js';
import axios from 'axios';

export default function Preview() {

    const ref = useRef();
    const dispatch = useDispatch();
    const [selectedItem, setSelectedItem] = useState(0);
    const [selectedUpper, setSelectedUpper] = useState(0);
    const [selectedLower, setSelectedLower] = useState(0);
    const {upperGarment, lowerGarment} = useSelector(state => state.user);
    const [lowerGarments, setLowerGarments] = useState(null);
    const [upperGarments, setUpperGarments] = useState(null);


    useEffect(()=>{
        axios.get(`http://localhost:4002/api/products?upper=${upperGarment}&lower=${lowerGarment}`)
            .then(res=>{
                setLowerGarments(res.data.lower);
                setUpperGarments(res.data.upper);
            })
        axios.post('',{user, garment, pose})
        .then((res)=>{})
    },[])

    const previewHandler = () =>{
        axios.post('',{user, garment, pose})
        .then((res)=>{})
    }

  return (
      <div className='preview'>
        <div className='preview-container'>
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
            <div className={'selection-list'} ref={ref}>
                <motion.div className='selection-items' drag="y" dragConstraints={ref}>
                    {items.map((item, index) => {
                        return(
                            <motion.div 
                                id={item.id}
                                className={'item ' + item.id}
                                key={index}
                                whileHover={{ scale: 1.03  ,transition: { duration: 0.2 } }}
                                // whileTap={{ scale: 0.95  ,transition: { duration: 0.3 } }}
                                onClick={e => setSelectedItem(item.id)}
                            >
                                <div className='item-image'>
                                    <img className={selectedItem == item.id ? 'selected' : ''} src={item.image}/>
                                </div>
                            </motion.div>
                        )         
                    })}
                </motion.div>
            </div>
            
        </div>
        <Button full='back-btn' onClick={()=>{dispatch(setNext(''))}}> Back </Button>
    </div>
  )
}
