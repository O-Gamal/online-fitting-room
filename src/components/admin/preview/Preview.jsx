/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import Button from '../../../utilities/button/Button';
import './Preview.scss';
import {motion} from 'framer-motion';
import { useDispatch,  useSelector } from 'react-redux';
import { setPage } from '../../../states/admin.js';
import axios from 'axios'


export default function Preview() {
    const [pose, setPose] = useState('T');
    const {generatedGar} = useSelector((state) => state.admin);
    const dispatch = useDispatch();
    let obj;
    
    
    const previewHandler = () => {
        console.log(generatedGar.product_id);
        axios.post('http://localhost:4002/api/smpl/showsmpl',
        {products_id:[generatedGar.product_id], pose, sizes:['L']})
        .then((res)=>console.log(res.data))
        .then( () => {obj = useLoader(OBJLoader, '/images/output/body.obj');
        console.log(obj)
        })
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
        previewHandler();
    },[])

    useEffect(()=>{
        previewHandler();
    },[pose])
    
    return (
        <motion.div initial={{ opacity: 0, y:100 }} animate={{ opacity: 1, y:0 }} exit={{ opacity: 0, y: -50 }} transition={{velocity: 90,type: "Inertia"}} className='admin-preview'>
            <div className='preview-container'>
                <div className='canvas-container'>
                    <Canvas className='canvas'>
                        { obj && <primitive object={obj} />}
                    </Canvas>
                    <div className='pose-btns'>
                        <Button  full='pose-btn' onClick={()=> setPose('T')}> T </Button>
                        <Button  full='pose-btn' onClick={()=> setPose('I')}> I </Button>
                        <Button  full='pose-btn' onClick={()=> setPose('A')}> A </Button>
                    </div>
                </div>
            </div>
            <div className="preview-btns">
                <Button onClick={()=>dispatch(setPage(0))}  pad={12}>Add More</Button>
            </div>
        </motion.div>
    )
}
