import React,{useRef} from 'react';
import Header from './components/Header/Header';
import TeamMembers from './components/TeamMembers/TeamMembers';
import Section from './components/section/Section.jsx';
import Showcase from './components/showcase/Showcase.jsx';
import PhaseOne from './components/phaseOne/PhaseOne.jsx';
import Footer from './components/Footer/Footer';
import ModalTwo from './components/modalTwo/ModalTwo';
import './App.scss';

function App() {
  const teamRef = useRef();

  return (
    <div className="App">
      <Header teamRef={teamRef} />
      <Showcase />
      <Section pages={<PhaseOne/>} heading="3D Human Modeling" image='images/smpl-v2.png'/>
      <Section pages={<ModalTwo/>} heading="Garment Registration and Texture Mapping" rev='rev' image='images/shirt-v2.png'/>
      <Section heading="Size Recommendation" image='images/tape.png'/>
      <TeamMembers ref={teamRef}/>
      <Footer year={2022}/>
    </div>
  );
}

export default App;
