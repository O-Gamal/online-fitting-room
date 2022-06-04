import React,{useRef} from 'react';
import './styles/App.scss';
import Header from './components/Header';
import TeamTest from './components/TeamMembers';

function App() {
  const teamRef = useRef();

  return (
    <div className="App">
      <Header teamRef={teamRef} />
      <TeamTest ref={teamRef}/>
    </div>
  );
}

export default App;
