import React, { Component } from 'react'
import cropped from '../assets/cropped.png'

export class bio extends Component {
    render() {
        return (
            <div>
                <p>Hello</p>
                <img src={cropped}></img>
            </div>
        )
    }
}

export default bio
