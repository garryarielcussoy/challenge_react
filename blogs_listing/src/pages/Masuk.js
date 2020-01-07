import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'
import {Header} from '../components/Header'

export function Masuk(){
    return (
        <React.Fragment>
            <Header />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-4'></div>
                    <div className='col-4 login-sheet'>
                        <form className='login-session'>
                            <h3 className='h3-login'>LOGIN</h3>
                            <input type='text' placeholder='Username'></input><br /><br />
                            <input type='text' placeholder='Password'></input><br /><br />
                            <button type='button' className='btn btn-primary'>Masuk</button>
                        </form>
                    </div>
                    <div className='col-4'></div>
                </div>
            </div>
        </React.Fragment>
    )
}