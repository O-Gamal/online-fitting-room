/* eslint-disable */
import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Button from '../../../utilities/button/Button';
import './Preview.scss';
import {motion} from 'framer-motion';

export default function Preview() {

    const [pose, setPose] = useState(0);
    
    return (
        <motion.div initial={{ opacity: 0, y:20 }} animate={{ opacity: 1, y:0 }} exit={{ opacity: 0, y: -20 }}  transition={{delay: 0.2 }} className='admin-preview'>
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
            </div>
        </motion.div>
    )
}
