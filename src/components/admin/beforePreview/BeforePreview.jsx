import React from 'react';
import Button from '../../../utilities/button/Button';
import './BeforePreview.scss'

const OtherPage = ({setPage}) => {

  return (
    <div className="beforePreview">
        <h2>Product has been added</h2>
        <div className="beforePreview-btns">
            <Button onClick={()=>setPage(0)} full='full' pad={15}>Preview</Button>
            <Button onClick={()=>setPage(0)} full='full' pad={15}>Add More</Button>
        </div>
    </div>
  )
}

export default OtherPage