import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Admin.scss';
import GarmentType from './garmentType/GarmentType.jsx';
import TshirtPage from './tshirtPage/TshirtPage.jsx';
import OtherPage from './otherPage/OtherPage.jsx';
import BeforePreview from './beforePreview/BeforePreview.jsx';
import Preview from './preview/Preview.jsx';

export default function Admin(){

  const garTypes = ['shirt', 'pants', 'short', 'skirt'];
  const [garType, setGarType] = useState('shirt');
  const [page, setPage] = useState(0);

  return (
    <div className='admin-container'>
        <div className='admin-header'>
            <div className='welcome-user'> Hello Admin</div>
            {page===0 &&<Link to='/'><i className="material-icons">home</i></Link>}
            {page!==0 &&<Link to='/admin'><i onClick={()=>setPage(0)} className="material-icons">home</i></Link>}
        </div>
        <div className='admin-body'>
            {page === 0 && <GarmentType garTypes={garTypes} garType={garType} setGarType={setGarType} setPage={setPage}/>}
            {page === 1 && garType==='shirt' &&  <TshirtPage setPage={setPage} />}
            {page === 1 && garType!=='shirt'  &&  <OtherPage setPage={setPage} />}
            {page === 2 && <BeforePreview setPage={setPage}/>}
            {page === 3 && <Preview />}
        </div>
    </div>
  )
}