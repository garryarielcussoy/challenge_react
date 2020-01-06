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
                        <div className='col-3'>
                            <img src={reactLogo} className='react-logo'/>
                        </div>
                        <div className='col-4'></div>
                        <div className='col-3'></div>
                        <div className='col-2'></div>
                    </div>
                </div>
            </header>
        )
    }
}