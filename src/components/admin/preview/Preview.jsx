/* eslint-disable */
import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Button from '../../../utilities/button/Button';
import './Preview.scss';
import {motion} from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setPage } from '../../../states/admin.js';

export default function Preview() {

    const [pose, setPose] = useState(0);
    const dispatch = useDispatch();
    
    return (
        <motion.div initial={{ opacity: 0, y:100 }} animate={{ opacity: 1, y:0 }} exit={{ opacity: 0, y: -50 }} transition={{velocity: 90,type: "Inertia"}} className='admin-preview'>
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
            <div className="preview-btns">
                <Button onClick={()=>dispatch(setPage(0))}  pad={12}>Add More</Button>
            </div>
        </motion.div>
    )
}
