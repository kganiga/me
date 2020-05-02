import React, { Component } from "react";
import './style.css'

/**
* @author
* @function ReadOMeter
**/

class ReadOMeter extends Component {

    constructor() {
        super();
        this.state = {
            txtBox: null
        };

        this.calculateReadTime = this.calculateReadTime.bind(this);
    }

    handleChange = e => {
        let txt = e.target.value;
        this.setState({
            [e.target.name]: txt
        });
    };
    calculateReadTime() {
        const wordsPerMinute = 200;
        let txt = this.state.txtBox;
        if (null != txt) {
            let textLength = txt.split(" ").length
            let value = Math.ceil(textLength / wordsPerMinute);
            alert('~'+value+' min read');
        }else{
            alert('Add your txt..')
        }

    }

    render() {
        return (
            <div className="card-inner animated active fadeInLeft" id="card-home" >
                <div className="card-wrap">
                    <div className="content works">
                        <div className="title "><span class="first-word">C</span>alculate Reading Time</div>
                        <section className="section">
                            <div className="container">
                                <br />
                                <div className="level">
                                    <p className="level-left level-item">Type or paste your text to calculate the reading time</p>
                                </div>
                                <div className="level">
                                    <textarea className="textarea" value={this.state.txtBox} onChange={this.handleChange} name="txtBox" placeholder="Add your text ..." defaultValue={""} />
                                </div>
                                <br/>
                                <div className="level">
                                    <div className="level-left">
                                        <button onClick={this.calculateReadTime} className="button"><span className="text">Calculate Read Time</span><span className="arrow" /></button>
                                        <p className="has-text-info" id="readingTime"></p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }

}

export default ReadOMeter