import React from "react";
import Frame1 from '../assets/frame1.svg';
import Frame2 from '../assets/frame2.svg';
import Frame3 from '../assets/frame3.svg'

class Projects extends React.Component {
  render() {
    return (
      <Desktop3
        frame8={Frame1}
        frame7={Frame2}
        frame5={Frame3}
      />
    );
  }
}

export default Projects;


class Desktop3 extends React.Component {
  render() {
    const { frame8, frame7, frame5 } = this.props;

    return (
      <div className="desktop-3">
        <img className="frame-8" src={frame8} />
        <img className="frame-7" src={frame7} />
        <img className="frame-5" src={frame5} />
      </div>
    );
  }
}