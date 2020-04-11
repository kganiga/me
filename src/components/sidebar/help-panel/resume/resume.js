import React, { Component } from "react";
import Briefcase from 'react-ionicons/lib/MdBriefcase'

class Resume extends Component {
    render() {
        return (
            <>
                <div class="card-inner animated active fadeInRight" id="card-home">
                    <div class="card-wrap">
                        <div className="content resume">
                            <div className="title">
                                <span className="first-letter">Resume</span>
                            </div>
                            <div className="row">
                                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                                    <div className="resume-title border-line-h">

                                        <div className="name">Experience</div>
                                    </div>
                                    <div className="resume-items">
                                        <div className="resume-item border-line-h active">
                                            <div className="date">2019 - Present</div>
                                            <div className="name">Tech Lead</div>
                                            <div className="company">EY</div>
                                            <div className="single-post-text">
                                                <p>
                                                    Adobe solutions Tech Lead.
                                        </p>
                                            </div>
                                        </div>
                                        <div className="resume-item border-line-h ">
                                            <div className="date">2017 - 2019</div>
                                            <div className="name">Senior Associate</div>
                                            <div className="company">Publicis.Sapient</div>
                                            <div className="single-post-text">
                                                <p>
                                                    Senior Associate for Adobe solutions.
                                        </p>
                                            </div>
                                        </div>
                                        <div className="resume-item border-line-h ">
                                            <div className="date">2016 - 2017</div>
                                            <div className="name">System Engineer</div>
                                            <div className="company">Deloitte India </div>
                                            <div className="single-post-text">
                                                <p>
                                                    AEM Developer.
                                        </p>
                                            </div>
                                        </div>
                                        <div className="resume-item border-line-h ">
                                            <div className="date">2013 - 2016</div>
                                            <div className="name">Software Engineer</div>
                                            <div className="company">Accenture</div>
                                            <div className="single-post-text">
                                                <p>
                                                    AEM Developer.
                                        </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                                    <div className="resume-title border-line-h">

                                        <div className="name">EDUCATION</div>
                                    </div>
                                    <div className="resume-items">
                                        <div className="resume-item border-line-h ">
                                            <div className="date">2007 - 2011</div>
                                            <div className="name">B.Tech</div>
                                            <div className="company">ECE</div>
                                            <div className="single-post-text">
                                                <p>
                                                    Vaagdevi Institute of Technology and Science(JNTU Anantapur)
                                        </p>
                                            </div>
                                        </div>
                                        <div className="resume-item border-line-h ">
                                            <div className="date">2005 - 200t</div>
                                            <div className="name">Intermediate</div>
                                            <div className="company"></div>
                                            <div className="single-post-text">
                                                <p>Abhyas Junior College</p>
                                            </div>
                                        </div>
                                        <div className="resume-item border-line-h ">
                                            <div className="date">2004 - 2005</div>
                                            <div className="name">SSC</div>
                                            <div className="company"></div>
                                            <div className="single-post-text">
                                                <p>
                                                    St.Joseph's Convent E.M. High School
                                        </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="clear" />
                            </div>
                        </div>
                        
                        <div className="content testimonials">
                            <div className="title">
                                <span className="first-letter">Proessional Summary</span>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Resume;