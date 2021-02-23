import React, { Component } from 'react';
import resumePDF from '../assets/resume.pdf'

export class Resume extends Component {
    render() {
        return (
            <div>
                <embed src={resumePDF} width="800px" height="1068px"></embed>
            </div>
        )
    }
}

export default Resume
