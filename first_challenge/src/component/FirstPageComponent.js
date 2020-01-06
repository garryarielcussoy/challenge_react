import React from 'react';
import '../style/bootstrap.min.css'
import '../style/main.css'
import Hamilton from '../img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'

export class FirstPageComponent extends React.Component {
    render() {
    return <div class="container container2 body">
        <div class="tengah">
            <div class="row align-items-center gambar_fix">
                <div class="col-md-4 foto">
                    <img src={Hamilton} width="330" alt=""
                    height="330" />
                </div>
                <div class="col-md-8 my_name">
                    <h4 id="home">Hi, my name is</h4>
                    <h1 id="home">Anne Sullivan</h1>
                    <h3 id="home">I build things for the web</h3>
                    <a href="" class="buttonhome">Get In Touch</a>
                </div>
            </div>
        </div>
    </div>
    }
}