import React from 'react';
import sumit from './Media/sumit.jpg'
import './MyResume.css'

// use this file as basic layout and name of classes of your css
function MyResume() {
    return (
        <div className="name__resume">
            <div className="name__contact">
                <h1>Sumit Saurabh</h1>
                <h3>sumitsaurabh9868@gmail.com</h3>
                <h3>9871464772</h3>
                <a href="https://www.linkedin.com/in/sumit-saurabh9868/">linkedin.com/in/sumit-saurabh9868</a>

            </div>
            <div className="skills__and__img">
                <div className="name__skills">
                    <h1> Education</h1>
                    <h2>Netaji Subhas Institute of Technology Bachelor's degree, Computer Science 2018 - 2022</h2>
                    <p>Completed courses under various technical subjects such as DBMS , Data Structures and Algorithms, OperatingSystems, Computer Networking</p>
                    <h2>Kendriya Vidyalaya janakpuri 2006 - 2018</h2>
                    <p>12th Grade</p>
                    <h1>Licenses & Certifications</h1>
                    <ul>
                        <li>
                            Python Data Structures Coursera
                        </li>
                        <li>
                            Getting started with Python Coursera
                        </li>
                    </ul>
                    <h1>Skills</h1><ul>
                        <li>
                            Java
                        </li>
                        <li>
                            Python (Programming Language)
                        </li>
                        <li>
                            C++
                        </li>
                        <li>
                            Photography
                        </li>
                        <li>
                            Soware Development
                        </li>
                        <li>
                            HTML
                        </li>
                    </ul>
                </div>

                <div className="name__img">
                    <img src={sumit} alt="profile pic" />
                </div>
            </div>
        </div>

    );
}

export default MyResume;