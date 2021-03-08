import './App.css';
import './styles/projects.css';
import './styles/about.css';
import React from "react";
import MainCard from './components/mainCard.js';
import Projects from './components/projects.js';
import About from './components/about.js'

class App extends React.Component {
  render() {
    return (
    <div>
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

