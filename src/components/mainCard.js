import React from "react";
import '../styles/main.css';

class MainCard extends React.Component {
  render() {
    return <Group1 {...group1Data} />;
  }
}

export default MainCard;


class Group1 extends React.Component {
  render() {
    const {
      name,
      yance,
      softwareEngineer,
      linkedin,
      vector,
      vector2,
      github,
      vector3,
      blog,
      vector4,
      resume,
      vector5,
      vector6,
    } = this.props;

    return (
      <div className="group-1">
        <div className="overlap-group2">
          <h1 className="name mitr-semi-bold-azure-radiance-40px">{name}</h1>
          <div className="yance mitr-semi-bold-azure-radiance-40px">{yance}</div>
          <div className="software-engineer mitr-semi-bold-black-26px">{softwareEngineer}</div>
        </div>
        <div className="auto-flex2">
          <div className="auto-flex1">
            <div className="linked-in mitr-semi-bold-scooter-18px">{linkedin}</div>
            <div className="entypo-sociallinkedin smart-layers-pointers ">
              <img className="vector" src={vector} />
              <img className="vector-1" src={vector2} />
            </div>
            <div className="overlap-group1">
              <div className="github mitr-semi-bold-scooter-18px">{github}</div>
              <div className="entypo-socialgithub smart-layers-pointers ">
                <img className="vector-2 smart-layers-pointers " src={vector3} />
              </div>
            </div>
          </div>
          <div className="auto-flex">
            <div className="overlap-group">
              <div className="blog mitr-semi-bold-scooter-18px">{blog}</div>
              <div className="entypo-socialgi-hub-with-circle smart-layers-pointers ">
                <img className="vector-3" src={vector4} />
              </div>
            </div>
            <div className="resume mitr-semi-bold-scooter-18px">{resume}</div>
            <div className="bidownload smart-layers-pointers ">
              <div className="overlap-group3">
                <img className="vector-4 smart-layers-pointers " src={vector5} />
                <img className="vector-5" src={vector6} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const group1Data = {
    name: "Richard",
    yance: "Yance",
    softwareEngineer: "Software Engineer",
    linkedin: "LinkedIn",
    vector: "https://anima-uploads.s3.amazonaws.com/projects/60395e34f57919ae2cbe4ab0/releases/603d1d06c4f4a8c6699d306a/img/vector-4@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60395e34f57919ae2cbe4ab0/releases/603d1d06c4f4a8c6699d306a/img/vector-5@2x.svg",
    github: "Github",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60395e34f57919ae2cbe4ab0/releases/603d1d06c4f4a8c6699d306a/img/vector-2@2x.svg",
    blog: "Blog",
    vector4: "https://anima-uploads.s3.amazonaws.com/projects/60395e34f57919ae2cbe4ab0/releases/603d38aee7ac16214ff43eca/img/vector-9@2x.svg",
    resume: "Resume",
    vector5: "https://anima-uploads.s3.amazonaws.com/projects/60395e34f57919ae2cbe4ab0/releases/60396d8fb8d88bc8b6871e1e/img/vector-6@2x.svg",
    vector6: "https://anima-uploads.s3.amazonaws.com/projects/60395e34f57919ae2cbe4ab0/releases/603d1d06c4f4a8c6699d306a/img/vector-1@2x.svg",
};

