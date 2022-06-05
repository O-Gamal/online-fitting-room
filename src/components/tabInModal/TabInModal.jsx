import React from 'react';
import { Tabs } from '@mantine/core';
import './tabInModal.scss';

const TabInModal = ({pages}) => {
  return (
    <Tabs 
      orientation="vertical" 
      variant="pills" 
      classNames={{tabActive: 'dotActive', tabInner: 'dotInner', tabsList: 'dotWrapper', tabControl: 'dotControl'}}
      style={{width: '100%', height: '100%', alignItems:'center' }}
    >
        {pages.map((page, index) => <Tabs.Tab label={index}>{page}</Tabs.Tab>)}
    </Tabs>
  )
}

export default TabInModal