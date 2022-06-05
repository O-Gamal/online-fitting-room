import React, { useState } from 'react';
import './section.scss'
import Button from '../button/Button.jsx';
import Modall from '../modal/Modall.jsx';

const Section = ({rev, pages, heading}) => {

  const [isOpen, setIsOpen] = useState(false);
  const openHandler = () => setIsOpen(true);
  const closeHandler = () => setIsOpen(false);

  return (
    <div className={'section '+rev}>
        <div className="contant">
            <h1>{heading}</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery.</p>
            <Button grad='grad' onClick={openHandler}>Demo</Button>
            <Modall closeHandler={closeHandler} isOpen={isOpen} heading={heading}>{pages}</Modall>
        </div>
        <div className="image3d"></div>
    </div>
  )
}

export default Section