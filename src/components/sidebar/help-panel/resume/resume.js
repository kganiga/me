import React, { Component } from "react";
import './style.css'

class Resume extends Component {
    render() {
        return (
            <>
                <div className="card-inner animated active fadeInRight" id="card-home">
                    <div className="card-wrap">
                        <div className="content resume">
                            <div className="title">
                                <span className="first-letter">Work History</span>
                            </div>
                            <div className="row">
                                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                                    <div className="resume-items">
                                        <div className="resume-item border-line-h active">
                                            <div className="date">2019 - Present</div>
                                            <div className="name">Tech Lead</div>
                                            <div className="company">EY</div>
                                            <div className="single-post-text">
                                                <p>Adobe Experience Manager Lead Developer</p>
                                            </div>
                                        </div>

                                        <div className="resume-item border-line-h ">
                                            <div className="date">2016 - 2017</div>
                                            <div className="name">System Engineer</div>
                                            <div className="company">Deloitte India </div>
                                            <div className="single-post-text">
                                                <p>Adobe Experience Manager Developer</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                                    <div className="resume-items">
                                        <div className="resume-item border-line-h ">
                                            <div className="date">2017 - 2019</div>
                                            <div className="name">Senior Associate</div>
                                            <div className="company">Publicis.Sapient</div>
                                            <div className="single-post-text">
                                                <p>Adobe Experience Manager Lead Developer</p>
                                            </div>
                                        </div>
                                        <div className="resume-item border-line-h ">
                                            <div className="date">2013 - 2016</div>
                                            <div className="name">Software Engineer</div>
                                            <div className="company">Accenture</div>
                                            <div className="single-post-text">
                                                <p>Adobe Experience Manager Developer</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="content resume">
                            <div className="title">
                                <span className="first-letter">Education</span>
                            </div>
                            <div className="row">
                                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                                    <div className="resume-items">
                                        <div className="resume-item border-line-h ">

                                            <div className="name">B.Tech</div>
                                            <div className="company">ECE</div>
                                            <div className="single-post-text">
                                                <p>Vaagdevi Institute of Technology and Science (JNTU Anantapur)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="content testimonials">
                            <div className="title">
                                <span className="first-letter">Skills</span>
                            </div>
                            <div className="row">
                                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                                    <div className="resume-items">
                                        <div className="resume-item border-line-h techItem ">
                                            <div className="techIcon">
                                                <span className="ion ion-code"><img src={require('../../../../assets/images/aem.png')} alt="aem" /></span>
                                            </div>
                                            <div className="name">ADOBE EXPERIENCE MANAGER</div>
                                            <div className="company">AEM/CQ, Sightly,Sling, Groovy, Felix (OSGi), JCR, Dispatcher, Maven</div>
                                        </div>
                                        <div className="resume-item border-line-h techItem ">
                                            <div className="techIcon">
                                                <span className="ion ion-code"><img src={require('../../../../assets/images/web.jpg')} alt="aem" /></span>
                                            </div>
                                            <div className="name">WEB TECHNOLOGIES</div>
                                            <div className="company">ReactJS, jQuery, JavaScript, JSON, HTML5, CSS3,Less, XML</div>
                                        </div>
                                        <div className="resume-item border-line-h techItem ">
                                            <div className="techIcon">
                                                <span className="ion ion-code"><img src={require('../../../../assets/images/bot.jpg')} alt="aem" /></span>
                                            </div>
                                            <div className="name">BOT PROGRAMMING</div>
                                            <div className="company">Twitter, Messenger, Telegram</div>
                                        </div>
                                        <div className="resume-item border-line-h techItem ">
                                            <div className="techIcon">
                                                <span className="ion ion-code"><img src={require('../../../../assets/images/versionControl.jpg')} alt="aem" /></span>
                                            </div>
                                            <div className="name">VERSION CONTROL TOOLS</div>
                                            <div className="company">GitBash, TortoiseGit, SourceTree</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
                                    <div className="resume-items">
                                        <div className="resume-item border-line-h techItem ">
                                            <div className="techIcon">
                                                <span className="ion ion-code"><img src={require('../../../../assets/images/acm.jpeg')} alt="aem" /></span>
                                            </div>
                                            <div className="name">ADOBE CAMPAIGN MANAGER</div>
                                            <div className="company">ACM Classic,PostgreSQL, MySQL</div>
                                        </div>
                                        <div className="resume-item border-line-h techItem ">
                                            <div className="techIcon">
                                                <span className="ion ion-code"><img src={require('../../../../assets/images/java.jpg')} alt="aem" /></span>
                                            </div>
                                            <div className="name">JAVA TECHNOLOGIES</div>
                                            <div className="company">JAVA/J2EE, Servlets, JSP</div>
                                        </div>
                                        <div className="resume-item border-line-h techItem ">
                                            <div className="techIcon">
                                                <span className="ion ion-code"><img src={require('../../../../assets/images/officeAutomation.jpg')} alt="aem" /></span>
                                            </div>
                                            <div className="name">OFFICE AUTOMATION</div>
                                            <div className="company">Google App Script</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="clear" />
                            </div>
                        </div>
                        <div className="content testimonials">
                            <div className="title">
                                <span className="first-letter">Certifications</span>
                            </div>
                            <section className="card">
                                <img src={require('../../../../assets/images/aem-sites-developer.png')} alt="aem certification" />
                                <div className="info">
                                    <h2><a href="https://www.youracclaim.com/badges/aa5e79a2-e3e2-4a15-8a25-1d50498b4ef4/public_url">Adobe Certified Expert - Adobe Experience Manager Forms Developer</a></h2><h2>
                                        <p> Issued By : <a href="https://www.youracclaim.com/org/adobe">Adobe</a></p>
                                        <br />
                                        <p> Issued Jun 2020</p>
                                    </h2>
                                    <button className="btn btn--block card__btn"><a href="https://www.youracclaim.com/badges/aa5e79a2-e3e2-4a15-8a25-1d50498b4ef4/public_url">See credential</a></button>
                                </div>
                            </section>
                            <section className="card">
                                <img src={require('../../../../assets/images/aem-sites-developer.png')} alt="aem certification" />
                                <div className="info">
                                    <h2><a href="https://www.youracclaim.com/badges/76285d52-075c-4a4c-ac2d-9c4e5b97ed46/public_url">Adobe Certified Expert - Adobe Experience Manager Sites Developer</a></h2><h2>
                                        <p> Issued By : <a href="https://www.youracclaim.com/org/adobe">Adobe</a></p>
                                        <br />
                                        <p> Issued Jun 2020, Expires Jun 2022 </p>
                                    </h2>
                                    <button className="btn btn--block card__btn"><a href="https://www.youracclaim.com/badges/76285d52-075c-4a4c-ac2d-9c4e5b97ed46/public_url">See credential</a></button>
                                </div>
                            </section>
                            <section className="card">
                                <img src={require('../../../../assets/images/aep.png')} alt="aep certification" />
                                <div className="info">
                                    <h2><a href="https://www.youracclaim.com/badges/76285d52-075c-4a4c-ac2d-9c4e5b97ed46/public_url">Adobe Qualified – Adobe Experience Platform</a></h2><h2>
                                        <p> Issued By : <a href="https://www.youracclaim.com/org/adobe">Adobe</a></p>
                                    </h2>
                                    <button className="btn btn--block card__btn"><a href="https://www.youracclaim.com/badges/76285d52-075c-4a4c-ac2d-9c4e5b97ed46/public_url">See credential</a></button>
                                </div>
                            </section>
                            <section className="card">
                                <img src={require('../../../../assets/images/ey-badge.png')} alt="ey badge" />
                                <div className="info">
                                    <h2><a href="https://www.youracclaim.com/badges/d498492c-83c5-4305-81a9-1b2ced653169/linked_in_profile">EY Analytics - Data visualization - Bronze</a></h2><h2>
                                        <p> Issued By: <a href="https://www.youracclaim.com/org/ey">EY</a> </p>
                                    </h2>
                                    <button className="btn btn--block card__btn"><a href="https://www.youracclaim.com/badges/d498492c-83c5-4305-81a9-1b2ced653169/linked_in_profile">See credential</a></button>
                                </div>
                            </section>
                            <section className="card">
                                <img src={require('../../../../assets/images/certfication-img.png')} alt="acm certification" />
                                <div className="info">
                                    <h2><a href="https://www.youracclaim.com/badges/16b987fd-e045-4ea8-86d3-e019daaaf48b/public_url">Adobe Certified Expert - Adobe Campaign Classic Developer</a></h2><h2>
                                        <p> Issued By : <a href="https://www.youracclaim.com/org/adobe">Adobe</a></p>
                                        <br />
                                        <p> Issued Mar 2020, Expires Mar 2022 </p>
                                    </h2>
                                    <button className="btn btn--block card__btn"><a href="https://www.youracclaim.com/badges/16b987fd-e045-4ea8-86d3-e019daaaf48b/public_url">See credential</a></button>
                                </div>
                            </section>

                        </div>
                        <div className="content testimonials">
                            <div className="title">
                                <span className="first-letter">Honors & Awards</span>
                            </div>
                            <section className="card">
                                <img src={require('../../../../assets/images/EY.png')} alt="" />
                                <div className="info">
                                    <h2>SPOT Award </h2><h2>
                                        <p> 2020, EY </p>
                                    </h2>

                                </div>
                            </section>
                            <section className="card">
                                <img src={require('../../../../assets/images/accenture.png')} alt="" />
                                <div className="info">
                                    <h2>Accenture Celebrates Excellence (ACE) </h2><h2>
                                        <p> 2015, Accenture </p>
                                        <p>Awarded prestigious Accenture Celebrates Excellence (ACE) award to Delivery Excellence in the Individual category.
                                        </p>
                                    </h2>

                                </div>
                            </section>
                            <section className="card">
                                <img src={require('../../../../assets/images/accenture.png')} alt="" />
                                <div className="info">
                                    <h2>Star of the Month </h2><h2>
                                        <p> 2015, Accenture </p>
                                        <p>Awarded Star of the Month for focuses on delivering excellence.The award for bringing the expertise to bear in delivering complex client requirements in a creative way.
</p>
                                    </h2>

                                </div>
                            </section>

                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default Resume;