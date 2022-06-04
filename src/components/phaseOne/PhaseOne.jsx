import React from 'react'
import { Tabs } from '@mantine/core';
import PageOne from './PageOne.jsx';
import PageTwo from './PageTwo.jsx';
import './phaseOne.scss';

const PhaseOne = () => {
  return (
    <Tabs orientation="vertical" variant="pills" style={{width: '100%', height: '100%', alignItems:'center' }}>
        <Tabs.Tab label="one"><PageOne/></Tabs.Tab>
        <Tabs.Tab label="two"><PageTwo/></Tabs.Tab>
    </Tabs>
  )
}

export default PhaseOne