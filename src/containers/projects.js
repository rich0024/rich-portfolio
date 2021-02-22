import React, { Component } from 'react'

export class projects extends Component {
    render() {
        return (
            <div>
                <a href='https://drive.google.com/file/d/1bOysEO40yupx5xljQUtMLGxPuHuwOPKc/view?usp=sharing'>My Recipe Book</a>
                <br></br>
                <ul>
                    <p>React based project with user experience in mind which allows for sharing and scrolling of recipes</p>
                    <li>-SPA with React and Redux frontend, backend built with Ruby on Rails</li>
                    <li>-Utilized Web Tokens and PostgreSQL to store encrypted user information client-side</li>
                </ul>
                <br></br>
                <a href='https://drive.google.com/file/d/1FXQ9gUdFAMwycyWnFQ60YekbwIzC0JiG/view'>Training Journal(javascript)</a>
                <br></br>
                <ul>
                    <p>SPA which allows the user to create and log a workout routine</p>
                    <li>-Utilized Javascript asynchronicity to create a faster user experience</li>
                    <li>-Implemented a local API and integrated with the front end</li>
                    <li>-Employed multiple event listeners using Fetch to enhance functionality</li>
                </ul>
                <br></br>
                <a href='https://drive.google.com/file/d/1Iae5GWg_UZQ4vHRJ3WDZaidWk6wwb46u/view'>Training Journal(Rails)</a>
                <br></br>
                <ul>
                    <p>A multi-page web application which allows the user to plan and track workout routines.</p>
                    <li>-Applied omniauth for user login with github</li>
                    <li>-Maintained MVC structure using Ruby on Rails</li>
                    <li>-Enabled the user to create, read, update and delete (CRUD) workout routines</li>
                    <li>-Used foundational code to create classes, class methods, instance methods, while and for loops, array iteration, syntax, string interpolation, and object orientation</li>
                </ul>
            </div>
        )
    }
}

export default projects
