import React from "react";
import Carousel from 'react-bootstrap/Carousel'

class Projects extends React.Component {
  render() {
    return (
      <Desktop3
      pROJECTS={
        <>
          P R O J E C T S
        </>
      }
      />
    );
  }
}

export default Projects;


class Desktop3 extends React.Component {
  render() {
    const { pROJECTS } = this.props;
    return (
      <div className="desktop-3">
        <h1 className="p-r-o-j-e-c-t-s mitr-bold-black-48px animate-enter smart-layers-pointers ">{pROJECTS}</h1>
        <Carousel>
          <Carousel.Item >
          <div className='js-journal'>
          <h1 className='proj-title'>Training Journal(Javascript)</h1>
          <a href="https://drive.google.com/file/d/1Iae5GWg_UZQ4vHRJ3WDZaidWk6wwb46u/view">Demo</a>-
          <a href="https://github.com/rich0024/TrainingJournal2">Github</a>
          <h2 className='description'>SPA which allows the user to create and log a workout routine. Great for instructors or individuals who like to have a plan</h2>
          <p>-Utilized Javascript asynchronicity to create a faster user experience</p>
          <p>-Implemented a local API and integrated with the front end</p>
          <p>-Employed multiple event listeners using Fetch to enhance functionality</p>
          </div>
          </Carousel.Item>
          <Carousel.Item >
          <div className='recipe'>
          <h1 className='proj-title'>Recipe Book</h1>
          <a href="https://drive.google.com/file/d/1bOysEO40yupx5xljQUtMLGxPuHuwOPKc/view">Demo</a>-
          <a href="https://github.com/rich0024/my-recipe-book">Github</a>-
          <a href="http://sleepy-fortress-33259.herokuapp.com/">Visit</a>
          <h2 className='description'>React based project with user experience in mind which allows for sharing and scrolling of recipes</h2>
          <p>-SPA with React and Redux frontend, backend built with Ruby on Rails</p>
          <p>-Utilized Web Tokens and PostgreSQL to store encrypted user information client-side</p>
          </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className='rails-journal'>
          <h1 className='proj-title'>Training Journal(Ruby on Rails)</h1>
          <a href="https://drive.google.com/file/d/1FXQ9gUdFAMwycyWnFQ60YekbwIzC0JiG/view">Demo</a>-
          <a href="https://github.com/rich0024/TrainingJournal">Github</a>
          <h2 className='description'>A multi-page web application which allows the user to plan and track workout routines.</h2>
          <p>-Applied omniauth for user login with github</p>
          <p>-Maintained MVC structure using Ruby on Rails</p>
          <p>-Enabled the user to create, read, update and delete (CRUD) workout routines</p>
          <p>-Used foundational code to create classes, class methods, instance methods, while and for loops, array iteration, syntax, string interpolation, and object orientation</p>
          </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}