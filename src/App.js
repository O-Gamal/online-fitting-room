import React,{useRef} from 'react';
import './styles/App.scss';
import Header from './components/Header';
import TeamTest from './components/TeamTest';
import Section from './components/section/Section.jsx';
import Showcase from './components/showcase/Showcase.jsx';
import PhaseOne from './components/phaseOne/PhaseOne.jsx';

function App() {
  const teamRef = useRef();

  return (
    <div className="App">
      <Header teamRef={teamRef} />
      <Showcase />
      <Section pages={<PhaseOne/>}/>
      <Section  rev='rev'/>
      <Section />
      <TeamTest ref={teamRef}/>
    </div>
  );
}

export default App;
