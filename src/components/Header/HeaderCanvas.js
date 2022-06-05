import React,{useRef} from "react";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader, useFrame } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'




export default function HeaderCanvas() {

    const obj = useLoader(OBJLoader, '/models/person.obj')
    const meshObj = useRef();
    useFrame(() => {
        meshObj.current.rotation.y += 0.01     
    });
    console.log(useLoader)
    return (
        <>
            
            <ambientLight intensity={0.1}/>
            <pointLight position={[10, 10, 10]} />
            {/* <Html fullscreen >
                <div className="title">
                    <h1>Online Fitting Room</h1>
                </div>
            </Html> */}
            <mesh>
                <primitive  object={obj} position={[0,-0.3,4.5]} ref={meshObj} />
            </mesh>
        </>
    );
}