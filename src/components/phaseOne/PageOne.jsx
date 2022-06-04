import React from 'react';
import Button from '../button/Button.jsx';

const PageOne = () => {
  return (
    <div className="page">
        <div className="controller controller-one">
            <h2>Select your gender</h2>
            <form className="formOne">
                <input type="radio" value="Male" name="gender" /> Male
                <input type="radio" value="Female" name="gender" /> Female
            </form>
            <Button grad='grad'>Next</Button>
        </div>
        <div className="canvas-container"></div>
    </div>
  )
}

export default PageOne