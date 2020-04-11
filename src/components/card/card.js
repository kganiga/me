import React from 'react';
import bgImage from './Khalil.jpg';
import ReactRotatingText  from 'react-rotating-text';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faFacebook,
    faTwitter,
    faStackOverflow,
    faLinkedinIn,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons"; 
   
function Card() {
    return (
        <div className="card-started" id="home-card">
        <div className="profile no-photo">
          <div className="profile-content">
            <div className="slide lazyloaded" data-bg={bgImage} style={{backgroundImage: `url(${bgImage})`}} />
            <div className="title">Khalil Ganiga</div>
            <div className="subtitle subtitle-typed">            
                <ReactRotatingText items={['AEM Lead Developer', 'ACM Developer', 'Blogger']}  cursor ={false}  pause ={3000} typingInterval ={300}/>
            </div>
            {/*<span className="typed-cursor">|</span>*/}
            <div className="social">
              <a target='_blank' href="https://facebook.com/khalilbasha.g" rel ='noreferer'><FontAwesomeIcon icon={faFacebook} size="1x" /></a>
              <a target="_blank" href="https://twitter.com/Im_Khalil"> <FontAwesomeIcon icon={faTwitter} size="1x" /> </a>
              <a target="_blank" href="https://www.instagram.com/khalilbasha.g/"> <FontAwesomeIcon icon={faInstagram} size="1x" /> </a>

              <a target="_blank" href="https://github.com/kganiga"><FontAwesomeIcon icon={faGithub} size="1x" /> </a>              
              <a target="_blank" href="https://stackexchange.com/users/8488124/rmac"><FontAwesomeIcon icon={faStackOverflow} size="1x" /></a>
              <a target="_blank" href="https://www.linkedin.com/in/khalilganiga/"><FontAwesomeIcon icon={faLinkedinIn} size="1x" /></a>
            </div>
          </div>
          <div className="lnks">
            <a href="#" className="lnk"> <span className="text">Download CV</span> </a>
            <a href="mailto:khalil.b.ganiga@outlook.com" className="lnk"><span className="text">Contact Me</span> </a>           
          </div>
        </div>
      </div>
    );
}

export default Card;
