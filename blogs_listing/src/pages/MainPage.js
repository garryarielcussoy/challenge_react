import React from 'react'
import '../styles/bootstrap.min.css'
import {Header} from '../components/Header'
import {BeritaTerkini} from '../components/BeritaTerkini'

export class MainPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className='container'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-2'></div>
                                    <div className='col-9'>
                                        <BeritaTerkini />
                                    </div>
                                    <div className='col-1'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}