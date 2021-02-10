import React, { Component } from 'react'
import cropped from './cropped.png'

export class bio extends Component {
    render() {
        return (
            <div>
                <p>Hello</p>
                <img src={cropped}>
            </div>
        )
    }
}

export default bio
