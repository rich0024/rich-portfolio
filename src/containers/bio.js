import React, { Component } from 'react'
import cropped from '../assets/cropped.png'
import resume from '../assets/resume.pdf'

export class bio extends Component {
    render() {
        return (
            <div>
                <img src={cropped}></img>
                <br></br>
                <embed src={resume} width="800px" height="1068px"></embed>
            </div>
        )
    }
}

export default bio
