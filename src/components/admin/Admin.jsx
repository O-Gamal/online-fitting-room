import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './Admin.scss';
import GarmentType from './garmentType/GarmentType.jsx';
import TshirtPage from './tshirtPage/TshirtPage.jsx';
import OtherPage from './otherPage/OtherPage.jsx';
import BeforePreview from './beforePreview/BeforePreview.jsx';
import Preview from './preview/Preview.jsx';
import UploadTexture from './uploadTexture/UploadTexture.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../../states/admin.js';

export default function Admin(){

  const {page} = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  return (
      <div className='admin-container'>
          <div className='admin-header'>
              <div className='welcome-user'> Hello Admin</div>
              {page===0 &&<Link to='/'><i className="material-icons">home</i></Link>}
              {page!==0 &&<Link to='/admin'><i onClick={()=>dispatch(setPage(0))} className="material-icons">home</i></Link>}
          </div>
          <div className='admin-body'>
            <AnimatePresence exitBeforeEnter initial={false}>
              {page === 0 && <GarmentType key={0}/>}
              {page === 1 && <OtherPage key={1}/>}
              {page === 2 && <UploadTexture key={2}/>}
              {page === 3 && <TshirtPage key={3}/>}
              {/* {page === 4 && <BeforePreview key={4}/>} */}
              {page === 4 && <Preview key={4}/>}
            </AnimatePresence>
          </div>
      </div>
  )
}