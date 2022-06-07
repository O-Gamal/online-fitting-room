import React,{ Suspense, useMemo, useRef } from "react";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import * as THREE from 'three'
import { useLoader, useFrame } from '@react-three/fiber'
import { Html, OrbitControls, useGLTF } from '@react-three/drei'
import { motion } from 'framer-motion'




export default function HeaderCanvas() {

    // const obj = useLoader(OBJLoader, '/models/smplMale.obj')

    const { nodes, material } = useGLTF('/models/smpl.glb')
    console.log(nodes);
    // useMemo(() => {
    //     console.log(obj);
    //     const tex = new THREE.TextureLoader('./textures/skin.png')
        
    //     tex.encoding = THREE.sRGBEncoding
    //     tex.rouphness = 1.0
    //     tex.metalness = 0.0
    //     const mat = new THREE.MeshStandardMaterial({})
    //     // mat.map = tex
    //     const depthMat = new THREE.MeshDepthMaterial({
    //         depthPacking: THREE.RGBADepthPacking
    //     })

    //     obj.traverse((child) => {
    //         if (child.isMesh) {

    //             child.material = mat
    //             // child.material = mat;
    //             // child.customDepthMaterial = depthMat;
    //         }
    //     })
    // }, [obj])

    const meshObj = useRef();
    useFrame(() => {
        meshObj.current.rotation.y += 0.01     
    });
    return (
        <>
            
            <ambientLight intensity={0.1}/>
            
            <pointLight position={[10, 10, 10]} intensity={0.7} />
            <Html fullscreen>
                <div className="title">
                    <h1>Online Fitting Room</h1>
                </div>
            </Html>
            {/* <mesh geometry={nodes.root} />  */}
            <Suspense>
                <primitive  object={nodes['SMPL-male']} position={[0,-0.3,4.5]} ref={meshObj} />
            </Suspense>
        </>
    );
}