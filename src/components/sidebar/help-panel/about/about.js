import React from 'react';

import Mdmusicnote from 'react-ionicons/lib/MdMusicalNote'
import Mdbook from 'react-ionicons/lib/MdBook'
import MdCamera from 'react-ionicons/lib/MdCamera'
import Mdblogger from 'react-ionicons/lib/MdList'

function About() {
    return (<>
        <div class="card-inner animated active fadeInLeft" id="card-home">
            <div class="card-wrap">
                <div className="content about">
                    <div className="title"><span className="first-word">About</span> Me</div>
                    <div className="row">
                        <div className="col col-d-6 col-t-12 col-m-12 border-line-v">
                            <div className="text-box">
                                <p><strong>Hello! I’m Khalil Ganiga.</strong>
                                    <br /> AEM & ACM Developer from Banglore,India. I have rich experience in Adobe Experience Cloud, also I am good at Blogger,Google App Script.</p>
                            </div>
                        </div>
                        <div className="col col-d-6 col-t-12 col-m-12 border-line-v">
                            <div className="info-list">
                                <ul>
                                    <li><strong>Age:</strong> 29</li>
                                    <li><strong>Residence:</strong> India</li>
                                    <li><strong>Freelance:</strong> Available</li>
                                    <li><strong>Address:</strong> Banglore,India</li>

                                </ul>
                            </div>
                        </div>
                        <div className="clear" />
                    </div>
                </div>
                <div className="content fuct">
                    <div className="title"><span className="first-word">H</span> obbies</div>
                    <div className="row fuct-items">
                        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                            <div className="fuct-item">
                                <div className="icon"><Mdmusicnote /></div>
                                <div className="name">100+ Albums Listened</div>
                            </div>
                        </div>
                        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                            <div className="fuct-item">
                                <div className="icon"><Mdbook /></div>
                                <div className="name">Avid Reader</div>
                            </div>
                        </div>
                        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                            <div className="fuct-item">
                                <div className="icon"><Mdblogger /></div>
                                <div className="name">Tech Blogger</div>
                            </div>
                        </div>
                        <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                            <div className="fuct-item">
                                <div className="icon"><MdCamera /></div>
                                <div className="name">Photography</div>
                            </div>
                        </div>
                        <div className="clear" /></div>
                </div>

            </div>
        </div>

    </>);
}

export default About;
