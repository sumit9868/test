import React from 'react';
import Chirag_pic from './Media/Chirag.jpg'
import './Chirag.css';
import 'font-awesome/css/font-awesome.min.css';

const Chirag = () => {
    return(
        <div className="outer">
            <div className="row-1">
                <div className="header">
                    <span className="header-name">Chirag Arora, </span>
                    <span className="header-college">NSUT'23</span>
                    <span className="header-contacts">
                        <span className="fa fa-large fa-envelope">&nbsp;</span>
                        <a href="mailto: carora755@gmail.com" target="_blank">carora755@gmail.com</a>
                        <span> | </span>
                        <span className="fa fa-large fa-phone">&nbsp;</span>
                        <a href="tel: +917290824168" target="_blank">+91-7290824168</a>
                        <span> | </span>
                        <span className="fa fa-large fa-github">&nbsp;</span>
                        <a href="https://github.com/chiragxarora" target="_blank">chiragxarora</a>
                    </span>
                </div>
            </div>
            <div className="row-2">
                <div className="content-big">

                </div>
                <div className="content-small">
                    <div className="photo">
                        <img src={Chirag_pic} alt="Avatar" width="250" height="300"></img>
                    </div>
                    <div className="inner">
                        <h1>About Me</h1>
                        <p>------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                    </div>
                    <div className="inner">
                        <h1>Education</h1>
                        <div>
                            <h3>Netaji Subhas University of Technology</h3>
                            <h3 className="clg-year">- 2023</h3>
                            <div className="clg-details">
                                <span>B Tech. - Instrumentation and Control Engineering</span>
                                <br></br>
                                <span>CGPA : 8.0</span>
                            </div>
                        </div>
                        <div>
                            <h3>Kendriya Vidyalaya</h3>
                            <h3 className="scl-year">- 2018</h3>
                            <div className="clg-details">
                                <span>Senior Secondary School : 10.0</span>
                                <br></br>
                                <span>Higher Secondary School : 91%</span>
                                <br></br>
                            </div>
                        </div>
                        
                    </div>
                    <div className="inner">
                        <h1>Skills</h1>
                        <div>
                            <ul>
                                <li>
                                    <strong>Languages : </strong>
                                    Java, C++, Javascript
                                    <br/><br/>
                                </li>
                                <li>
                                    <strong>Frameworks/Libraries : </strong>
                                    React, Jquery, Express, Sequelize
                                    <br/><br/>
                                </li>
                                <li>
                                    <strong>Databases : </strong>
                                    Mysql, MongoDB
                                    <br/><br/>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chirag;