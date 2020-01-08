import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'
import reactLogo from '../img/logo.svg'
import {SearchBar} from '../components/SearchBar'
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

const listCategory = ["Sport", "Economy", "Health", "Entertainment"]

export class Header extends React.Component {    
    handleClick = () => {
        console.warn("check whether handleClick is execute or not")
        store.setState({
            isLogin: false,
            accKey: '',
            name: '',
            email: ''
        })
        alert("Sukses logout")
        return <Redirect to={{ pathname: "/" }} />;
    }
    
    // handleClick = () => {
    //     console.warn("check whether handleClick is execute or not")
    //     localStorage.removeItem("is_login");
    //     localStorage.removeItem("accKey");
    //     localStorage.removeItem("name");
    //     localStorage.removeItem("email");
    //     alert("Sukses logout")
    //     return <Redirect to={{ pathname: "/" }} />;
    // }

    clickTab = async (something) => {
        await store.setState({category: something, categoryOrSearch: 'category'})
        console.warn('check state value of category', this.props.category)
    }

    // searchByWord = async(something) => {
    //     await store.setState({keyWord: something, categoryOrSearch: 'search'})
    //     console.warn('check state value of keyword', this.props.keyWord)
    // }
    
    render(){
        const is_login = this.props.isLogin;
        console.warn(this.props)
        return (
            <header>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-2'>
                            <Link to='/'><img src={reactLogo} className='react-logo'/></Link>
                            <span>KabarKabar</span>
                        </div>
                        <div className='col-5'>
                            <ul className='list-unstyled topic-menu'>
                            {listCategory.map(category => 
                                <li><a onClick={() => this.clickTab(category)} href=''><Link to={'/category/' + category}>{category}</Link></a></li>
                            )}
                                <li>
                                    <form>
                                        <select className='dropdown-in-header'>
                                            <option value='Lainnya'>Lainnya</option>
                                            <option value='Hobi'>Hobbies</option>
                                        </select>
                                    </form>
                                </li>
                            </ul>
                        </div>
                        <div className='col-3'>
                            {console.warn(this.props)}
                            <SearchBar />
                        </div>
                        <div className='col-2'>
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