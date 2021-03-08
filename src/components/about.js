import React from "react";
import Rectangle1 from '../assets/rectangle1.svg';
import Cropped from '../assets/cropped.png';
import Projects from '../components/projects.js';

class About extends React.Component {
  render() {
    return (
      <Desktop4
        overlapGroup={Rectangle1}
        rectangle7={Cropped}
        text1="With a BA in integrated mathematics and science (biology focus) from William Paterson, I began my career life as a mortgage loan processor. As I continued processing, I realized that there is nothing stopping me from moving up and getting my own loan originator license. As I continued to help people refinance or purchase their home, I found that relying on commissions for income was not the most reliable, so I decided to learn a new skill and found The Flatiron School. I immediately realized that I loved coding and the limitless opportunities and possibilities it brings. Now, as an eccentric creative software engineer with a background in loan origination, I am passionate about improving and assisting companies, clients and teams with a limitless positive attitude and boundaryless approach to achieving goals, solving problems, and creating efficiencies."
      />
    );
  }
}

export default About;


class Desktop4 extends React.Component {
  render() {
    const { overlapGroup, rectangle7, text1 } = this.props;

    return (
      <div className="desktop-4">
        <div className="overlap-group" style={{ backgroundImage: `url(${overlapGroup})` }}>
          <img className="rectangle-7" src={rectangle7} />
          <p className="text-1 valign-text-middle mitr-medium-black-13px">{text1}</p>
        </div>
      </div>
    );
  }
}