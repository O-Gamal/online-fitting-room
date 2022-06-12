import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './Admin.scss';
import GarmentType from './garmentType/GarmentType.jsx';
import TshirtPage from './tshirtPage/TshirtPage.jsx';
import OtherPage from './otherPage/OtherPage.jsx';
import BeforePreview from './beforePreview/BeforePreview.jsx';
import Preview from './preview/Preview.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../../states/admin.js';

export default function Admin(){

  const {page, garType} = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  return (
      <div className='admin-container'>
          <div className='admin-header'>
              <div className='welcome-user'> Hello Admin</div>
              {page===0 &&<Link to='/'><i className="material-icons">home</i></Link>}
              {page!==0 &&<Link to='/admin'><i onClick={()=>dispatch(setPage(0))} className="material-icons">home</i></Link>}
          </div>
          <div  exit={{ x: 50 }} layout className='admin-body'>
            <AnimatePresence exitBeforeEnter initial={false}>
              {page === 0 && <GarmentType key={0}/>}
              {page === 1 && garType==='shirt' &&  <TshirtPage key={1}/>}
              {page === 1 && garType!=='shirt' &&  <OtherPage key={2}/>}
              {page === 2 && <BeforePreview key={3}/>}
              {page === 3 && <Preview key={4}/>}
            </AnimatePresence>
          </div>
      </div>
  )
}