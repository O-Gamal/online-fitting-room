import React from 'react';
import Button from '../../../utilities/button/Button';
import './BeforePreview.scss';
import { useDispatch } from 'react-redux';
import { setPage } from '../../../states/admin.js';

const OtherPage = () => {

  const dispatch = useDispatch()

  return (
    <div className="beforePreview">
        <h2>Product has been added</h2>
        <div className="beforePreview-btns">
            <Button onClick={()=>dispatch(setPage(3))}  pad={12}>Preview</Button>
            <Button onClick={()=>dispatch(setPage(0))}  pad={12}>Add More</Button>
        </div>
    </div>
  )
}

export default OtherPage