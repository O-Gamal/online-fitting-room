import React from 'react';
import Button from '../../../utilities/button/Button';
import './mainPage.scss';

const MainPage = ({setPage}) => {
  return (
    <div className="modalTwoMain">
        <div className="modalTwoMain-sec">
            <h2>create garment texture map</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery.</p>
            <div><Button pad='12px' full='full' onClick={()=>setPage(0)}>Next</Button></div>
        </div>
        <div className="vd"></div>
        <div className="modalTwoMain-sec">
            <h2>create new garment registration</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery.</p>
            <div><Button pad='12px' full='full' onClick={()=>setPage(1)}>Next</Button></div>
        </div>
    </div>
  )
}

export default MainPage;