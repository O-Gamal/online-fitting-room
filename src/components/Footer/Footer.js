import React from 'react'
import './Footer.scss'

export default function Footer({ year }) {
  return (
    <div className='footer-container'>
        <span>Copyright © {year} online fitting room.</span>
    </div>
  )
}
