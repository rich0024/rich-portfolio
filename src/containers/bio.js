import React, { Component } from 'react'
import cropped from '../assets/cropped.png'
import resume from '../assets/resume.pdf'

export class bio extends Component {
    render() {
        return (
            <div>
                <img src={cropped}></img>
                <br></br>
                <h3>About Richard</h3>
                <br></br>
                <p>An eccentric creative software engineer with a background in loan origination and a degree in integrated
mathematics and science (focus in biology) turned software engineer. Passionate about improving and
assisting companies, clients and teams with a limitless positive attitude and boundaryless approach to
achieving goals, solving problems, and creating efficiencies.
</p>
                <embed src={resume} width="800px" height="1068px"></embed>
            </div>
        )
    }
}

export default bio
