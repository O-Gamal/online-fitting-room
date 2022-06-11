import React from 'react'
import { Tabs } from '@mantine/core';
import { motion } from 'framer-motion';
import UserLogin from '../userLogin/UserLogin';
import UserRegister from '../userRegister/UserRegister';

export default function Intro1() {
  return (
    <motion.div className='intro-container'>
        <Tabs 
            variant="pills" 
            position="center" 
            grow 
            style={{width: '100%'}}
            classNames={{
                tabActive: 'activeTab',
                tabInner: 'innerTab',
                tabsList: ' tabsList',  
                tabControl: 'tabControl',
                tabsListWrapper: 'tabsWrapper',
            }}
          >
            <Tabs.Tab label="login" tabKey={0} style={{fontSize: '1.2rem'}}>
                <UserLogin />
            </Tabs.Tab>
            <Tabs.Tab  label="Register" tabKey={1} style={{fontSize: '1.2rem'}}>
                <UserRegister />
            </Tabs.Tab>
        </Tabs>
    </motion.div>
  )
}
