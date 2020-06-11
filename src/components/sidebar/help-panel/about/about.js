import React from 'react';

import Mdmusicnote from 'react-ionicons/lib/MdMusicalNote'
import Mdbook from 'react-ionicons/lib/MdBook'
import MdCamera from 'react-ionicons/lib/MdCamera'
import Mdblogger from 'react-ionicons/lib/MdList'
import './style.css'

function About() {
    return (<>
        <div className="card-inner animated active fadeInLeft " id="card-home">
            <div className="card-wrap">
                <div className="content about">
                    <div className="title"><span className="first-word">A</span>bout Me</div>
                    <div className="row">
                        <div className="col col-d-6 col-t-12 col-m-12 border-line-v aboutMe">
                            <div className="text-box">
                                <p>Hello! I’m <strong> Khalil Ganiga.</strong>
                                    <br /> I am certified AEM and ACM classic developer.</p>
                                <br />
                                <p>To be an Adobe Experience Manager developer is to be a full stack engineer. I am a Java Engineer with a deep understanding of the AEM APIs and the underlying frameworks that compose AEM.</p>
                                <br />
                                <p> Strong web developer background allows me to focus on providing optimized and uninhibited user experiences. I create fast, responsive, SEO friendly websites using HTML5, CSS3, JavaScript, and the latest tools in client-side development.</p>
                            </div>
                        </div>
                        <div className="col col-d-6 col-t-12 col-m-12 border-line-v addSection"><div className="info-list"><ul><li> <strong> <span> Residence: </span> </strong> <span> India </span></li><li> <strong> <span> Address: </span> </strong> <span> Banglore, India </span></li></ul></div></div>

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
