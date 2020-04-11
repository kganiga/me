import React, { Component } from "react";
import axios from 'axios';

const GOOGLE_FORM_NAME = 'entry.1829150506'
const GOOGLE_FORM_EMAIL_ID = 'entry.1297812451'
const GOOGLE_FORM_MESSAGE = 'entry.1087698458'
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSc34JAyET9Gtiz37H4CkcQKynJ08hOBJF_jkmyYd_sor82i3w/formResponse'


class ContactMe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: '',
            email: '',
            name: '',
            showForm: false,
            sendingMessage: false,
            messageSent: false,
            messageError: false
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            sendingMessage: true
        })
        this.sendMessage()
    }

    handleFormToggle = () => {
        this.setState(
            (prevState) => {
                const { showForm } = prevState
                return {
                    showForm: !showForm
                }
            }
        )
    }

    handleReturnButton = () => {
        this.setState(
            {
                showForm: false,
                messageSent: false,
                messageError: false
            }
        )
    }

    sendMessage = () => {
        const formData = new FormData()
        formData.append(GOOGLE_FORM_NAME, this.state.name)
        formData.append(GOOGLE_FORM_EMAIL_ID, this.state.email)
        formData.append(GOOGLE_FORM_MESSAGE, this.state.message)

        axios.post(CORS_PROXY + GOOGLE_FORM_ACTION, formData)
            .then(() => {
                this.setState({
                    messageSent: true,
                    sendingMessage: false,
                    message: '',
                    email: ''
                })
            }).catch(() => {
                this.setState({
                    messageError: true,
                    sendingMessage: false
                })
            })
    }

    returnButton = () => <button id='return-button' className='btn btn-default btn-xs' onClick={this.handleReturnButton}>Return</button>


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
            <div class="card-inner animated active fadeInDown" id="card-home">
                <div class="card-wrap">
                    <div className="content contacts">
                        <div className="title"><span className="first-word">Get</span> in touch</div>
                        <div class="row">
                            <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
                                <div class="info-list">
                                    <ul>
                                        <li> <strong>Address:</strong> Banglore,India</li>
                                        <li> <strong>Email:</strong> khalil.b.ganiga@outlook.com</li>
                                        <li> <strong>Phone:</strong> +91-9063221100</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                    <div className="content contacts">
                        <div class="title"><span class="first-word">Contact</span> Form</div>
                        <div class="row">
                            <div class="col col-d-12 col-t-12 col-m-12 border-line-v">
                                <div className="contact_form">
                                    <div role="form">
                                        <div className="screen-reader-response" />
                                        <form onSubmit={this.handleSubmit} >
                                            <div className="row">
                                                <div className="col col-d-6 col-t-6 col-m-12">
                                                    <div> <span><input type="text" name="your-name" size={40} placeholder="Your Name" /></span></div>
                                                </div>
                                                <div className="col col-d-6 col-t-6 col-m-12">
                                                    <div > <span ><input type="email" name="your-email" size={40} placeholder="Email Address" /></span></div>
                                                </div>
                                                <div className="col col-d-12 col-t-12 col-m-12">
                                                    <div > <span><textarea name="your-message" cols={40} rows={10} placeholder="Your Message" defaultValue={""} /></span></div>
                                                </div>
                                            </div>
                                            <div className="align-left">
                                                <button type="submit" className="button"><span className="text">Send Message</span><span className="arrow" /></button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                    </div>
                </div>
            </div>


        </>
        );
    }
}

export default ContactMe;