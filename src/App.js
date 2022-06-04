import Section from './component/section/Section.jsx';
import Showcase from './component/showcase/Showcase.jsx';
import PhaseOne from './component/phaseOne/PhaseOne.jsx';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Showcase />
      <Section pages={<PhaseOne/>}/>
      <Section  rev='rev'/>
      <Section />
    </div>
  );
}

export default App;
