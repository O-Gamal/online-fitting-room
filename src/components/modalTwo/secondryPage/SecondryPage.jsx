import React from 'react';
import TabInModal from '../../tabInModal/TabInModal';
import PageOne from './PageOne.jsx';
import PageTwo from './PageTwo.jsx';
import './secondryPage.scss';

const SecondryPage = ({page, setPage}) => {
  return (
      <>
      <div className="backHome" onClick={()=>setPage(-1)}>H</div>
      <TabInModal pages={[<PageOne/>,<PageTwo block={page}/>]}/>
      </>
  )
}

export default SecondryPage;