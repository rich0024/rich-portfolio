import React from "react";
import Cropped from '../assets/cropped.png';
import { Icon, InlineIcon } from '@iconify/react';
import rubyIcon from '@iconify-icons/logos/ruby';
import railsIcon from '@iconify-icons/logos/rails';
import reactIcon from '@iconify-icons/logos/react';
import sqlIcon from '@iconify-icons/carbon/sql';
import jsIcon from '@iconify-icons/grommet-icons/js';
import css3 from '@iconify-icons/logos/css-3';
import figmaIcon from '@iconify-icons/grommet-icons/figma';



class About extends React.Component {
  render() {
    return (
      <div className="grid2">
      <Desktop4
        rectangle7={Cropped}
        text1="With a BA in integrated mathematics and science (biology focus) from William Paterson, I began my career life as a mortgage loan processor. As I continued processing, I realized that there is nothing stopping me from moving up and getting my own loan originator license. As I continued to help people refinance or purchase their home, I found that relying on commissions for income was not the most reliable, so I decided to learn a new skill and found The Flatiron School. I immediately realized that I loved coding and the limitless opportunities and possibilities it brings. Now, as an eccentric creative software engineer with a background in loan origination, I am passionate about improving and assisting companies, clients and teams with a limitless positive attitude and boundaryless approach to achieving goals, solving problems, and creating efficiencies."
      />
      </div>
    );
  }
}

export default About;

class Desktop4 extends React.Component {
  render() {
    const { text1 } = this.props;

    return (
      <div className="desktop-4">
        <div className="overlap-group" >
          <h1 className="rectangle-7">About Richard</h1>
          <p className="text-1 valign-text-middle mitr-medium-black-13px">{text1}</p>
          <br></br>
          <br></br>
          <br />
          <div className="icons">
          <Icon icon={rubyIcon} width="80" height="80"/>
          <Icon icon={railsIcon} width="80" height="80"/>
          <Icon icon={reactIcon} width="80" height="80"/>
          <Icon icon={jsIcon} width="80" height="80"/>
          <Icon icon={sqlIcon} width="80" height="80"/>
          <Icon icon={css3} width="80" height="80"/>
          <Icon icon={figmaIcon} width="80" height="80"/>
          </div>
        </div>
      </div>
    );
  }
}


