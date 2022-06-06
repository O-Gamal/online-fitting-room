import React from 'react';
import Button from '../../button/Button.jsx';

const PageOne = () => {
  return (
    <div className="pageTwo">
        <div className='controller'>
            <div className='pgOne'>
                <h1>Select a saved user profile or create one</h1>
                <div className='optionOne limited'>
                    <Button pad='12px' full='full' >Select existing profile</Button>
                    <Button pad='12px' full='full' >Create new profile</Button>
                </div>
                <div className='limited'>
                    <Button pad='12px' full='full' >Next</Button>
                </div>
            </div>
        </div>
        <div className='canvas'></div>
    </div>
  )
}

export default PageOne