import React from 'react';
import '../style/bootstrap.min.css'
import '../style/main.css'
import altaLogo from '../img/logo-ALTA.png';

export class Header extends React.Component {
    render() {
        return (
            <header>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-7 col-sm-12 altalogo">
                        <img src={altaLogo} alt=""/>
                    </div>
                    <div className="col-md-5 option1">
                        <div className="header-nav1">
                            <ul className="header-nav__list1 list-unstyled">
                                <li>
                                    <a><span className="header-active-tab">HOME</span></a>
                                </li>
                                <li>
                                    <a href="">ABOUT</a>
                                </li>
                                <li>
                                    <a href="">EXPERIENCE</a>
                                </li>
                                <li>
                                    <a href="">CONTACT</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </header>
        )
    }
}