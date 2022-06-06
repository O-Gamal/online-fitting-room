import React from 'react';
import Button from '../button/Button.jsx';
import Radio from '../radio/Radio.jsx';

const PageOne = () => {
  return (
    <div className="page">
        <div className="controller">
          <div>
            <h2>Select your gender</h2>
            <form className="formOne" animate>
              <Radio id="male" value="male" name="gender" vart='fullW' label="Male"/>
              <Radio id="female" value="female" name="gender" vart='fullW' label="Female"/>
            </form>
            <Button pad={'12px'} full={'full'}>Next</Button>
          </div>
        </div>
        <div className="canvas-container"></div>
    </div>
  )
}

export default PageOne