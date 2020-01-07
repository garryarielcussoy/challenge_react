import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'
import reactLogo from '../img/logo.svg'
import {SearchBar} from '../components/SearchBar'
import {BrowserRouter, Route, Link} from 'react-router-dom'

const listCategory = ["sport", "economy", "health", "entertainment"]

export class Header extends React.Component {    
    render(){
        console.warn(this.props)
        return (
            <header>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-2'>
                            <img src={reactLogo} className='react-logo'/>
                            <span>KabarKabar</span>
                        </div>
                        <div className='col-5'>
                            <ul className='list-unstyled topic-menu'>
                            {listCategory.map(category => 
                                <li><a onClick={() => this.props.clickTab(category)} href=''><Link to={'/category/' + category}>{category}</Link></a></li>
                            )}
                                <li>
                                    <form>
                                        <select className='dropdown-in-header'>
                                            <option value='Lainnya'>Lainnya</option>
                                            <option value='Olahraga'>Olahraga</option>
                                        </select>
                                    </form>
                                </li>
                            </ul>
                        </div>
                        <div className='col-3'>
                            <SearchBar liftState={this.liftState}/>
                        </div>
                        <div className='col-2'>
                            <ul className='list-unstyled register-menu'>
                                <li><a href=''><Link to='/masuk'>Masuk</Link></a></li>
                                <li><a href=''><Link to='/masuk'>Daftar</Link></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}