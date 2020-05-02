import React, { Component } from 'react';
import './styles.css'
/**
* @author
* @function Work
**/

class Work extends Component {

    render() {
        return (<>
            <div className="card-inner animated active fadeInLeft" id="card-home">
                <div className="card-wrap">
                    <div className="content works">
                        <div className="title "><span class="first-word">R</span>ecent Works</div>
                        <div className="wrapper">
                            <div className="card radius shadowDepth1">
                                <div className="card__image border-tlr-radius">
                                    <img src={require('../../../../assets/images/numberToStr.jpg')} alt="heh" />
                                </div>
                                <div className="card__content card__padding">
                                    <article className="card__article">
                                        <h2><a href="#number-to-words">Convert Numbers to Words using Indian Numbering</a></h2>
                                    </article>
                                </div>
                            </div>
                            <div className="card radius shadowDepth1">
                                <div className="card__image border-tlr-radius">
                                    <img src={require('../../../../assets/images/read-o-meter.jpg')} alt="read o meter" />
                                </div>
                                <div className="card__content card__padding">
                                    <article className="card__article">
                                        <h2><a href="#read-o-meter">Calculate Reading time</a></h2>
                                    </article>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>


        </>
        )

    }


}

export default Work;