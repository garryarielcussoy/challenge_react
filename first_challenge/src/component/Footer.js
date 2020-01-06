import React from 'react';
import '../style/bootstrap.min.css'
import '../style/main.css'
import logoAlta2 from "../img/logo-ALTA-v2.png"
import facebookLogo from "../img/ic_fb.png"
import twitterLogo from "../img/ic-twitter.png"
import instagramLogo from "../img/ic-instagram.png"
import linkedInLogo from "../img/ic-linkedin.png"

export class Footer extends React.Component{
    render(){
        return <footer>
        <div class="container-fluid foot">
            <div class="container footer1">
                <div class="row">
                    <div class="col-md-4 col-6">
                        <img src={logoAlta2} width="109.5px" height="57px" alt=""/>
                    </div>
                    <div class="col-md-4 col-6 media_sosial">
                        <p>Social Media</p>
                        <div class="sosial">
                            <a href="https://www.facebook.com/alterra.academy/?ref=br_rs" target="_blank"><img src={facebookLogo} width="20px" height="20px" alt=""/></a>
                            <a href="https://twitter.com/garrycussoy" target="_blank"><img src={twitterLogo} width="20.5px" height="16.5px" alt=""/></a>
                            <a href="https://instagram.com/aamfatur?igshid=czh27j1em8yl" target="_blank"><img src={instagramLogo} width="20.3px" height="20.3px" alt=""/></a>
                            <a href="https://id.linkedin.com/in/lelianto1?trk=people-guest_profile-result-card_result-card_full-click" target="_blank"><img src={linkedInLogo} width="20px" height="20px" alt=""/></a>
                        </div>
                    </div>
                    <div class="col-md-4 col-12 copyright">
                        <span>Copyright © 2019 Alterra</span> 
                    </div>
                </div>
            </div>
        </div>
    </footer>
    }
}