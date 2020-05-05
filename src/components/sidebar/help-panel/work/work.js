import React, { Component } from 'react';
import './styles.css'
/**
* @author
* @function Work
**/

class Work extends Component {

    render() {
        return (
            <div className="card-inner animated active fadeInLeft" id="card-home">
                <div className="card-wrap">
                    <div className="content works">
                        <div className="title "><span class="first-word">F</span>un Projects</div>
                        <div className="row grid-items border-line-v" style={{ position: 'relative', height: '1498.83px' }}>
                            <div className="col col-d-6 col-t-6 col-m-12 border-line-h grid-item f-link " style={{ position: 'absolute', left: '0px', transitionProperty: 'opacity, transform', transitionDuration: '0.4s', transitionDelay: '0ms', top: '0px' }}>
                                <div className="box-item">
                                    <div className="image">
                                        <a href="#number-to-words" className="has-popup-link"><img src={require('../../../../assets/images/numberToStr.jpg')} alt="" />
                                        </a>
                                    </div>
                                    <div className="desc"> <a href="#number-to-words" className="name">Convert Numbers to Words using Indian Numbering</a>
                                        <div className="category">JavaScript</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-d-6 col-t-6 col-m-12 border-line-h grid-item f-gallery " style={{ position: 'absolute', left: '351.175px', top: '0px' }}>
                                <div className="box-item">
                                    <div className="image">
                                        <a href="#read-o-meter" className="has-popup-gallery">
                                            <img src={require('../../../../assets/images/read-o-meter.jpg')} alt="read o meter" /> </a>

                                    </div>
                                    <div className="desc"> <a href="#read-o-meter" className="name">Read o meter</a>
                                        <div className="category">JavaScript</div>
                                    </div>
                                </div>
                            </div>
                            <div className="clear" /></div>
                    </div>
                </div>
            </div>
        )

    }


}

export default Work;