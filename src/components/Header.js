import React from "react";
import '../styles/Header.scss';

export default function Header() {
  return (
    <header>
      <div className='header-inner'>
        <div className='logo'>OFR.</div>
        <nav>
            <a href='/'>Team</a>
        </nav>
      </div>
    </header>
  );
}