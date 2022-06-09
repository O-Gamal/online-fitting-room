import React from 'react'
import './Input.scss'

export default function Input({placeholder, className, type, onChange, required}) {
  return (
    <>
        <input required={required} placeholder={placeholder} className={'input ' + className} type={type} onChange={onChange}></input>
    </>
  )
}
