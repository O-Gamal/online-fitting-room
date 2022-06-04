import React from 'react';
import Button from '../button/Button.jsx';

const PageTwo = () => {
  return (
  <div className="page">
      <div className="controller">
          <form className="formTwo">
            <div>
              <input type="text"/>
              <input type="text"/>
            </div>
            <div>
              <input type="text"/>
              <input type="text"/>
            </div>
            <div>
              <input type="text"/>
              <input type="text"/>
            </div>
            <div>
              <input type="text"/>
            </div>
            <div >
              <input type="radio" value="one" name="skin" />
              <input type="radio" value="two" name="skin" />
              <input type="radio" value="three" name="skin" />
              <input type="radio" value="four" name="skin" />
              <input type="radio" value="five" name="skin" />
              <input type="radio" value="six" name="skin" />
            </div>
 </form>
          <Button grad='grad'>Next</Button>
      </div>
      <div className="canvas-container"></div>
  </div>
  )
}

export default PageTwo