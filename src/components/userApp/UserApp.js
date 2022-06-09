import React from 'react'
import { Link } from 'react-router-dom'
import './UserApp.scss'
import GarmentType from '../garmentType/GarmentType'

export default function UserApp({name}) {
  return (
    <div className='app-container'>
        <div className='app-header'>
            <div className='welcome-user'> Hello { name }</div>
            <nav>
                <ul>
                    <li><Link to='/user/settings'><i className="material-icons">settings</i></Link></li>
                    <li><Link to='/'><i className="material-icons">home</i></Link></li>
                </ul>
            </nav>
        </div>
        <div className='app-body'>
            <GarmentType/>
        </div>
    </div>
  )
}
