import React, {useState} from 'react'
import Button from '../../utilities/button/Button'
import { motion } from 'framer-motion'
import Input from '../../utilities/input/Input'
import './UserLogin.scss';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import {setUser} from '../../states/user.js';
import {useDispatch} from 'react-redux';


export default function UserLogin() {

  const [userId , setUserId] = useState(1);
  const [isError , setIsError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = () => {
    axios.post('http://localhost:4002/api/users/login', {user_id:userId})
        .then(res => {
          if(!res.data.user) throw new Error;
          dispatch(setUser(res.data.user))
        })
        .then(()=>navigate("/user/app"))
        .catch((error) => {
          console.log(error);
          setIsError(true)})
  }

  return (
    <motion.div
      initial={{ x: 100, opacity: 0}}
      animate={{ x: 0, opacity: 1 }}
      className='login-container' >
      <h2 className='login-title'>Enter Your Id Below:</h2>
      <Input placeholder='User Id' type='text' className='login-input' value={userId} onChange={e =>( setUserId(e.target.value))}/>
      <Button full='login-button' onClick={login}> Login </Button>
      {isError && <p style={{color:'red'}}> wrong userId</p>}   
    </motion.div>
  )
}
