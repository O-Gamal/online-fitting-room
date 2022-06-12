import React from 'react'
import Button from '../../utilities/button/Button'
import Input from '../../utilities/input/Input'
import { motion } from 'framer-motion'
import './UserRegister.scss';
import {setUser, setUserPage} from '../../states/user.js';
import {useSelector, useDispatch} from 'react-redux';
import { showNotification } from '@mantine/notifications';



export default function UserRegister() {

  const userIns = ['name', 'age', 'gender'];
  const {user} = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <motion.div
      initial={{ x: -100, opacity: 0}}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100 }}
      className='register-container'>
      <h2 className='register-title'>Enter Your Info Below:</h2>
      {userIns.map(userIn => 
             <Input 
             key={userIn} 
             placeholder={userIn} 
             value={user[userIn]}
             type={userIn === 'age' ? 'number' : 'text'}
             onChange={e => dispatch(setUser({...user, [userIn] : e.target.value}))}
             />
          )}
      <Button onClick={()=>{
        dispatch(setUserPage(2));
        showNotification({
          title: `Hey there, your userId is ${user.name}`,
          autoClose: 5000,
          radius: '10px',
          styles:{
            root:{backgroundColor:'white'},
            title: { color: 'black',fontSize: '18px',textAlign: 'left'},
          }})}}
      > 
        Next 
      </Button>
    </motion.div>
  )
}
