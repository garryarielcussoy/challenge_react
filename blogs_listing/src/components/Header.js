import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'
import reactLogo from '../img/logo.svg'

export class Header extends React.Component {
    render(){
        return (
            <header>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-2'>
                            <img src={reactLogo} className='react-logo'/>
                            <span>KabarKabar</span>
                        </div>
                        <div className='col-4'>
                            <ul className='list-unstyled topic-menu'>
                                <li>Sepakbola</li>
                                <li>Ekonomi</li>
                                <li>Politik</li>
                                <li>Hiburan</li>
                                <li>Lainnya</li>
                            </ul>
                        </div>
                        <div className='col-4'></div>
                        <div className='col-2'></div>
                    </div>
                </div>
            </header>
        )
    }
}