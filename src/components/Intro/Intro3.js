/* eslint-disable */ 
import React, {useState} from 'react'
import Button from '../../utilities/button/Button'
import { useNavigate  } from 'react-router-dom';
import Input from '../../utilities/input/Input'
import DropZone from '../../utilities/dropzone/DropZone';
import './Intro.scss';
import {useSelector, useDispatch} from 'react-redux';
import {setMeasurements, setUserPage, setUser} from '../../states/user.js';
import { showNotification } from '@mantine/notifications';
import axios from 'axios';


function Manual(){

  const {measurements, Measurements} = useSelector(state => state.user);
  const dispatch = useDispatch();

  return(
      <>
        <h2>Enter Your Body Measurements:</h2>
        <div className='measurements-container'>
          {Measurements.map(measurement => 
             <Input 
             className='measure-btn' 
             key={measurement}
             type='number'
             placeholder={measurement} 
             value={measurements[measurement]} 
             onChange={e => dispatch(setMeasurements({...measurements, [measurement] : e.target.value}))}
             />
          )}
        </div>
      </>
  )
}

function UploadPhoto(image, setImage){
  return(
      <>
      <h2>Upload Your Photo</h2>
      <DropZone image={image} setImage={setImage}/>
      </>
  )
}

export default function Intro3() {

  const { measureType, user, measurements, skinTone, fitPreference,  } = useSelector(state => state.user);
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate ();
  
  const register = ()=>{
    let registerData='';
    if(measureType === 'Manual'){
      registerData ={...user, measurements, preference:fitPreference, skinTone}
    }else{
      registerData ={...user, img:image, preference:fitPreference, skinTone}
    }

    axios.post('http://localhost:4002/api/users', registerData, {headers: { 'Content-Type': 'multipart/form-data' }})
    .then(res => dispatch(setUser(res.data)))
    .then(()=>showNotification({
      title: `Hey there, your userId is ${user.name}`,
      autoClose: 3000,
      radius: '10px',
      styles:{
        root:{backgroundColor:'white'},
        title: { color: 'black',fontSize: '18px',textAlign: 'left'},
      }}))
    .then(()=>navigate("/user/app"))
  }

  return (
    <div className='intro-container'>
      {measureType === 'Manual' ? <Manual/> : <><h2>Upload Your Photo</h2><DropZone image={image} setImage={setImage}/></>} 
      <Button pad={8} onClick={()=>navigate("/user/app")}> Register</Button>
      <Button full='blk' pad={8} onClick={()=>dispatch(setUserPage(2))}> Back </Button>
    </div>
  )
}
