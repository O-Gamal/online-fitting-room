import React from 'react';
import Button from '../../../utilities/button/Button.jsx';
import Radio from '../../radio/Radio.jsx';
import { Slider } from '@mantine/core';


const PageTwo = ({block}) => {
  return (
    <div className="pageTwo">
        <div className='controller'>
          { block === 0 && <div>
                <h1>Select garment type</h1>
                <div className='optionTwo'>
                  <Radio vart='boxy' id='tshirt' name='garment' />
                  <Radio vart='boxy' id='skirt' name='garment' />
                  <Radio vart='boxy' id='short' name='garment' />
                  <Radio vart='boxy' id='pants' name='garment' />
                </div>
                <div className='slidergrp'>
                  <div className='labels'>
                    <h3 style={{marginBottom:'8px'}}>length</h3>
                    <h3>size</h3>
                  </div>
                  <div className='sliders'>
                    <Slider  color="pink" size="md" style={{marginBottom:'10px'}}/>
                    <Slider  color="pink" size="md" style={{marginTop:'18px'}}/>
                  </div>
                </div>
                <div className='optionOne'>
                  <Button className='last' pad='12px' full='full' >Show garment only</Button>
                  <Button className='last' pad='12px' full='full' >Show garment with SMPL</Button>
                </div>
            </div>
          }
          { block === 1 && <div>
            <h1>Upload a photo for the T-shirt</h1>
            <div className='twoDrop'>
              <div><h3>Front Side Photo</h3><div className='dropZone'></div></div>
              <div><h3>Back Side Photo</h3><div className='dropZone'></div></div>
            </div>
            <div className='optionOne limited'>
                  <Button className='last' pad='12px' full='full' >Show garment only</Button>
                  <Button className='last' pad='12px' full='full' >Show garment with SMPL</Button>
            </div>
            </div>
          }
        </div>
        <div className='canvas'></div>
    </div>
  )
}

export default PageTwo