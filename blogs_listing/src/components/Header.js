import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'
import reactLogo from '../img/logo.svg'
import searchLogo from '../img/search.png'

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
                        <div className='col-5'>
                            <ul className='list-unstyled topic-menu'>
                                <li><a href=''>Sepakbola</a></li>
                                <li><a href=''>Ekonomi</a></li>
                                <li><a href=''>Politik</a></li>
                                <li><a href=''>Hiburan</a></li>
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
                        <div className="search-bar">
                            <form>
                                <input type="text" placeholder="Search"></input>
                                <button type="submit"><img src={searchLogo} className="search-logo" /></button>
                            </form>
                        </div>
                        </div>
                        <div className='col-2'>
                            <ul className='list-unstyled register-menu'>
                                <li><a href=''>Masuk</a></li>
                                <li><a href=''>Daftar</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}