import './App.css';
import Bio from './containers/bio.js';
import Links from './containers/links.js';
import Projects from './containers/projects.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>Richard Yance</h1>
      <Links/>
      <Bio/>
      <Projects/>

    </div>
  );
}

export default App;
