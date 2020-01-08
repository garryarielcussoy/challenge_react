import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'
import reactLogo from '../img/logo.svg'
import SearchBar from '../components/SearchBar'
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

const listCategory = ["Sport", "Economy", "Health", "Entertainment"]

class Header extends React.Component {    
    handleClick = () => {
        console.warn("check whether handleClick is execute or not")
        store.setState({
            isLogin: false,
            accKey: '',
            name: '',
            email: ''
        })
        alert("Sukses logout")
        this.props.history.push("/masuk")
    }
    
    render(){
        const isLogin = this.props.isLogin;
        console.warn(this.props)
        return (
            <header>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-2 col-sm-12'>
                            <Link to='/'><img src={reactLogo} className='react-logo'/></Link>
                            <span>KabarKabar</span>
                        </div>
                        <div className='col-md-5 col-sm-12'>
                            <ul className='list-unstyled topic-menu'>
                            {listCategory.map(category => 
                                <li><a onClick={() => this.props.clickTab(category)} href=''><Link to={'/category/' + category}>{category}</Link></a></li>
                            )}
                            </ul>
                        </div>
                        <div className='col-md-3 col-sm-12'>
                            {console.warn(this.props)}
                            <SearchBar />
                        </div>
                        <div className='col-md-2 col-sm-12'>
                            <ul className='list-unstyled register-menu'>
                                {this.props.isLogin === true ? <li><a href='' onClick={() => this.handleClick()}>Keluar</a></li> : <li><a href=''><Link to='/masuk'>Masuk</Link></a></li>}
                                <li><a href=''><Link to='/profile'>Profile</Link></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default connect("isLogin, accKey, email, name", actions)(withRouter(Header));