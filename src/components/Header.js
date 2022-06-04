import React from "react";
import '../styles/Header.scss';
import { Canvas } from '@react-three/fiber'
import HeaderCanvas from "./HeaderCanvas";


const Header = ({teamRef}) => {

    const handleGoToTeam = () => {
        teamRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    return (
        <header>
            <div className='header-inner'>
                <div className='logo'>OFR.</div>
                <nav>
                    <button onClick={handleGoToTeam}>Team</button>
                </nav>
            </div>
            <div className="header-canvas-container">
                <Canvas >
                    <HeaderCanvas />
                </Canvas>
            </div>
        </header>
    );
};


export default Header;