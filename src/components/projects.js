import React from "react";
import Frame1 from '../assets/frame1.svg';
import Frame2 from '../assets/frame2.svg';
import Frame3 from '../assets/frame3.svg'

class Projects extends React.Component {
  render() {
    return (
      <Desktop3
      pROJECTS={
        <>
          P<br />R<br />O<br />J<br />E<br />C<br />T<br />S
        </>
      }
      />
    );
  }
}

export default Projects;


class Desktop3 extends React.Component {
  render() {
    const { pROJECTS, frame8, frame7, frame5 } = this.props;
    return (
      <div className="desktop-3">
        <h1 className="p-r-o-j-e-c-t-s mitr-bold-black-48px animate-enter smart-layers-pointers ">{pROJECTS}</h1>
        <div className="flex-col">

          <div className='js-journal'>
            <h2>Training Journal(javascript)</h2>
          <a href="https://drive.google.com/file/d/1Iae5GWg_UZQ4vHRJ3WDZaidWk6wwb46u/view">
          <p>Demo</p>
          </a>
          <h3>SPA which allows the user to create and log a workout routine</h3>
          <p>-Utilized Javascript asynchronicity to create a faster user experience
          -Implemented a local API and integrated with the front end
          -Employed multiple event listeners using Fetch to enhance functionality</p>
          </div>

          <div className='recipe'>
          <a href="https://drive.google.com/file/d/1bOysEO40yupx5xljQUtMLGxPuHuwOPKc/view">
          <img className="frame-7" src={frame7} />
          </a>
          </div>

          <div className='rails-journal'>
          <a href="https://drive.google.com/file/d/1FXQ9gUdFAMwycyWnFQ60YekbwIzC0JiG/view">
          <img className="frame-5" src={frame5} />
          </a>
          </div>
        </div>
      </div>
    );
  }
}