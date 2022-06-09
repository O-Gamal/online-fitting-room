import React from 'react';
import Button from '../../utilities/button/Button.jsx';
import { Tabs } from '@mantine/core';
import Radio from '../radio/Radio.jsx';

const PageTwo = () => {
  return (
  <div className="page">
      <form className="formTwo">
        <div className="formTwoWrapper">
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
            <Tabs.Tab label="Measurments">
              <div className="inputDiv">
                <div>
                  <input type="text" placeholder="Height"/>
                  <input type="text" placeholder="Chest"/>
                  <input type="text" placeholder="Hips"/>
                  <input type="text" placeholder="ShoulderW"/>
                </div>
                <div>
                  <input type="text" placeholder="Weight"/>
                  <input type="text" placeholder="Waist"/>
                  <input type="text" placeholder="Inseam"/>
                  <input type="text" placeholder="Fit preference"/>

                </div>
              </div>
            </Tabs.Tab>
            <Tabs.Tab label="Upload Photo">hey</Tabs.Tab>
          </Tabs>
          <div className="radiogrp">
            <Radio id="one" value="one" name="skin" vart='rnd'/>
            <Radio id="two" value="two" name="skin" vart='rnd'/>
            <Radio id="three" value="three" name="skin" vart='rnd'/>
            <Radio id="four" value="four" name="skin" vart='rnd'/>
            <Radio id="five" value="five" name="skin" vart='rnd'/>
            <Radio id="six" value="six" name="skin" vart='rnd'/>
          </div>
          <Button full={'full'} pad={'8px'}>Show Smpl</Button>
        </div>
      </form>
      <div className="canvas-container"></div>
  </div>
  )
}

export default PageTwo