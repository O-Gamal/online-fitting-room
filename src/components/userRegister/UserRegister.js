import React from 'react'
import Button from '../../utilities/button/Button'
import Input from '../../utilities/input/Input'
import './UserRegister.scss';
import {setUser, setUserPage} from '../../states/user.js';
import {useSelector, useDispatch} from 'react-redux';


export default function UserRegister() {

  const userIns = ['name', 'age', 'gender'];
  const {user} = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div className='register-container'>
      <h2 className='register-title'>Enter Your Info Below:</h2>
      {userIns.map(userIn => 
             <Input 
             key={userIn} 
             placeholder={userIn} 
             value={user[userIn]} 
             onChange={e => dispatch(setUser({...user, [userIn] : e.target.value}))}
             />
          )}
      <Button onClick={()=>dispatch(setUserPage(2))}> Next </Button>
    </div>
  )
}
