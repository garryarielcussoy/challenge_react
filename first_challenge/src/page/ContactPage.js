import React, { Component } from 'react';
import altaLogo2 from "../img/logo-ALTA-v2@2x.png";
import charlesImage from "../img/charles-rRWiVQzLm7k-unsplash.jpg"
import '../App.css';

export class ContactPage extends React.Component{
    render(){
        return (
        <div id="contact">
            <div className="container-fluid">
            <div className="row align-items-center">
                {/* <!-- Photo with Alterra Academy logo--> */}
                <div className="col-sm-12 col-md-5 contact-left">
                    <img src={altaLogo2} className="alterra-logo" alt=""/>
                    <img src={charlesImage} className="back-img" alt=""/>
                </div>

                {/* <!-- Form section --> */}
                <div className="col-sm-12 col-md-7 contact-form">
                    <div className="row">
                        <div className="col-12 contact-us">Contact Us</div>
                    <form id="contact-form" action="">
                        <div className="form-group input">
                            <label for="Full-Name">Full Name<span className="text-danger">*</span></label>
                            <input name="fullName" id="Full-Name" type="text" className="form-control" />
                        </div>
                        <div className="form-group input">
                            <label for="email">Email Address<span className="text-danger">*</span></label>
                            <input name="email" id="email" type="email" className="form-control" placeholder="example@alterra.id" />
                        </div>
                        <div className="form-group input">
                            <label for="Phone-Number">Phone Number<span className="text-danger">*</span></label>
                            <input name="phoneNumber" id="Phone-Number" type="text" className="form-control" placeholder="085554447900" />
                        </div>
                        <div className="form-group input">
                            <label for="Role">Role</label>
                            <select id="Role" name="role" className="form-control">
                                <option selected>Selected...</option>
                                <option value="FE">Fullstack Enginner</option>
                                <option value="QA">Quality Assurance</option>
                            </select>
                        </div>
                        <div className="form-group input">
                            <label for="Message">Message</label>
                            <textarea rows="6" id="message" name="message" className="form-control"></textarea>
                        </div>
                        <div className="input button_contact">
                            <a href="index.html" className="buttonhome">Submit</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>)
    }
}