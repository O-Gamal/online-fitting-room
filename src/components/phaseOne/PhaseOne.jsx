import React from 'react'
import TabInModal from '../tabInModal/TabInModal.jsx';
import PageOne from './PageOne.jsx';
import PageTwo from './PageTwo.jsx';
import './phaseOne.scss';

const PhaseOne = () => {
  return (
    <TabInModal pages={[<PageOne/>,<PageTwo/>]} />
  )
} 

export default PhaseOne;