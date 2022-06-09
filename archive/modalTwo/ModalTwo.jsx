import React, {useState} from 'react';
import SecondryPage from './secondryPage/SecondryPage.jsx';
import MainPage from './mainPage/MainPage.jsx';

const ModalTwo = () => {
  const [page, setPage] = useState(-1);
  if(page === -1) {
    return(
      <div style={{height: '100%', width: '100%'}}>
          <MainPage setPage={setPage}/>
      </div>
    )
  }
  return (
    <div style={{height: '100%', width: '100%',position: 'relative'}}>
        <SecondryPage page={page} setPage={setPage}/>
    </div>
  )
}

export default ModalTwo;