/* eslint-disable*/
import React from 'react';
import './TshirtPage.scss';
import Button from '../../../utilities/button/Button';
import Input from '../../../utilities/input/Input';
import { useDispatch } from 'react-redux';
import { setPage} from '../../../states/admin.js';
import DropZone from '../../../utilities/dropzone/DropZone';


const TshirtPage = () => {

  const dispatch = useDispatch();

  return (
    <div className="TshirtPage">
        <h2>Add garment details:</h2>
        <div className="TshirtPage-dropZone">
          <Input className='TshirtPage-input' placeholder='Name' />
          <div className="TshirtPage-drops">
            <DropZone />
            <DropZone />
          </div>
        </div>
        <div className="TshirtPage-btns">
          <Button onClick={()=>dispatch(setPage(0))}  pad={12} full='blk'>Back</Button>
          <Button onClick={()=>dispatch(setPage(2))}  pad={12}>Add</Button>
        </div>
    </div>
  )
}

export default TshirtPage