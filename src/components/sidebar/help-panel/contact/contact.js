import React, { Component } from "react";

import * as emailjs from 'emailjs-com'



class ContactMe extends Component {
    state = {
        name: '',
        email: '',       
        message: '',
    }
    handleSubmit(e) {
        e.preventDefault()
        const { name, email, message } = this.state
        let templateParams = {
            from_name:name,
            from_email: email,
            to_name: 'Khalil',            
            message_html: message,
        }
        emailjs.send(
            'gmail',
            'template_kvcn8ers',
            templateParams,
            'user_4nD3w2AztPMmCSXA0ALBa'
        )
        this.resetForm()
    }
    resetForm() {
        this.setState({
            name: '',            
            email: '',
            message: '',
        })
    }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }

    render() {
        if (this.state.sendingMessage) {
            return (
                <div>Sending...</div>
            )
        }

        if (this.state.messageSent) {
            return (
                <React.Fragment>
                    <div className='success-message'>Sent! I will respond asap.</div>
                    {this.returnButton()}
                </React.Fragment>
            )
        }

        if (this.state.messageError) {
            return (
                <React.Fragment>
                    <div className='error-message'>Sorry, something went wrong..!. Please try again..!</div>
                    {this.returnButton()}
                </React.Fragment>
            )
        }


        return (<>
            <div className="card-inner animated active fadeInDown" id="card-home">
                <div className="card-wrap">
                    <div className="content contacts">
                        <div className="title"><span className="first-word">Get</span> in touch</div>
                        <div className="row">
                            <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                                <div className="info-list">
                                    <ul>
                                        <li> <strong>Address:</strong> Banglore,India</li>
                                        <li> <strong>Email:</strong> khalil.b.ganiga@outlook.com</li>
                                        <li> <strong>Phone:</strong> +91-9063221100</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                    <div className="content contacts">
                        <div className="title"><span className="first-word">Contact</span> Form</div>
                        <div className="row">
                            <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
                                <div className="contact_form">
                                    <div role="form">
                                        <div className="screen-reader-response" />
                                        <form onSubmit={this.handleSubmit.bind(this)} >
                                            <div className="row">
                                                <div className="col col-d-6 col-t-6 col-m-12">
                                                    <div> <span><input type="text" name="name" value={this.state.name} size={40} placeholder="Your Name" onChange={this.handleChange.bind(this, 'name')} /></span></div>
                                                </div>
                                                <div className="col col-d-6 col-t-6 col-m-12">
                                                    <div > <span ><input type="email" name="email" value={this.state.email} size={40} placeholder="Email Address" onChange={this.handleChange.bind(this, 'email')}/></span></div>
                                                </div>
                                                <div className="col col-d-12 col-t-12 col-m-12">
                                                    <div > <span><textarea value={this.state.message} name="message" cols={40} rows={10} placeholder="Your Message" defaultValue={""} onChange={this.handleChange.bind(this, 'message') }/></span></div>
                                                </div>
                                            </div>
                                            <div className="align-left">
                                                <button type="submit" className="button"><span className="text">Send Message</span><span className="arrow" /></button>
                                            </div>
                                            <div className='success-message'></div>
                                            <div className='error-message'></div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="clear"></div>
                        </div>
                    </div>
                </div>
            </div>


        </>
        );
    }
}

export default ContactMe;