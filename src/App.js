import './App.css';
import './styles/projects.css';
import './styles/about.css';
import MainCard from './components/mainCard.js';
import About from './components/about.js';
import Projects from './components/projects.js';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


class App extends React.Component {
  render() {
    return(
      <div>
    <Carousel>
      <Carousel.Item >
        <MainCard />
    </Carousel.Item>
    <Carousel.Item >
      <About />
    </Carousel.Item>
    <Carousel.Item>
      <Projects />
    </Carousel.Item>
    </Carousel>
    </div>
    )
  }
}

export default App;