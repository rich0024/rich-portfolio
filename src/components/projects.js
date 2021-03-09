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
    const { pROJECTS, frame8, frame7, frame5 } = this.props;

    return (
      <div className="desktop-3">
        <h1 className="p-r-o-j-e-c-t-s mitr-bold-black-48px animate-enter smart-layers-pointers ">{pROJECTS}</h1>
        <div className="flex-col">
          <img className="frame-8" src={frame8} />
          <img className="frame-7" src={frame7} />
          <img className="frame-5" src={frame5} />
        </div>
      </div>
    );
  }
}