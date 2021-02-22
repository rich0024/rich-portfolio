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
                <p>With a BA in integrated mathematics and science (biology focus) from William Patterson,
I began my career life as a mortgage loan processor. As I continued processing, I realized that there is nothing
stopping me from moving up and getting my own loan originator license. As I continued to help people refinance or
purchase their home, I found that relying on commissions for income was not the most reliable, so I decided to learn 
a new skill and found The Flatiron School. I immediately realized that I loved coding and the limitless oppurtunities
and possibilities it brings. Now, as an eccentric creative software engineer with a background in loan origination, I am 
passionate about improving and assisting companies, clients and teams with a limitless positive attitude and boundaryless 
approach to achieving goals, solving problems, and creating efficiencies.
</p>
                <embed src={resume} width="800px" height="1068px"></embed>
            </div>
        )
    }
}

export default bio
