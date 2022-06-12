import React from 'react';
import './Input.scss';
import {useSelector} from 'react-redux';

export default function Input({placeholder, className, type, onChange, required}) {
  const {gender} = useSelector(state=>state.user.user);
  return (
    <>
        {placeholder!=='gender' && <input required={required} placeholder={placeholder} className={'input ' + className} type={type} onChange={onChange}/>}
        {placeholder==='gender' && <select required={required} className={'input ' + className} onChange={onChange} style={gender===''?{color:'#757575'}:{}}>
          <option value="" hidden>Gender</option>
          <option value='male'>male</option>
          <option value='female'>female</option>
        </select>}
    </>
  )
}
