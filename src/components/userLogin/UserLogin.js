import React, {useSelector} from 'react'
import Button from '../../utilities/button/Button'
import { motion } from 'framer-motion'
import Input from '../../utilities/input/Input'
import './UserLogin.scss';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';
import {setUser} from '../../states/user.js';


export default function userLogin() {

  const [userId , setUserId] = useState('');
  const [isError , setIsError] = useState(flase);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = () => {
    axios.post('/api/login', userId)
        .then(res => dispatch(setUser(res.data)))
        .then(()=>navigate("/user/app"))
        .catch(() => setIsError(true))
  }

  return (
    <motion.div
      initial={{ x: 100, opacity: 0}}
      animate={{ x: 0, opacity: 1 }}
      className='login-container' >
      <h2 className='login-title'>Enter Your Id Below:</h2>
      <Input placeholder='User Id' type='text' className='login-input' value={userId} onChange={e => setUserId(e.target.value)}/>
      <Button full='login-button' onClick={login}> Login </Button>   
    </motion.div>
  )
}
