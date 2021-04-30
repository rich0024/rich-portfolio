import './App.css';
import './styles/projects.css';
import './styles/about.css';
import MainCard from './components/mainCard.js';
import About from './components/about.js';
import Projects from './components/projects.js';
import React from 'react';


class App extends React.Component {
  render() {
    return(
    <div className='main'>
      <div className='nav'></div>
      <br></br>
      <br></br>
      <MainCard />
      <About />
      <Projects />
    </div>
    )
  }
}

export default App;