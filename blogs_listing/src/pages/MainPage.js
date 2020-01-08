import React from 'react'
import '../styles/bootstrap.min.css'
import {Header} from '../components/Header'
import {BeritaTerkini} from '../components/BeritaTerkini'
import {KontenUtama} from '../components/KontenUtama'
import {KontenUtamaKategori} from '../components/KontenUtamaKategori'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

export class MainPage extends React.Component {
    // Define state
    // state = {
    //     category: '',
    //     keyWord: 'math',
    //     categoryOrSearch: 'math'
    // }
    
    // clickTab = async (something) => {
    //     await store.setState({category: something, categoryOrSearch: 'category'})
    //     console.warn('check state value of category', this.props.category)
    // }

    // searchByWord = async(something) => {
    //     await store.setState({keyWord: something, categoryOrSearch: 'search'})
    //     console.warn('check state value of keyword', this.props.keyWord)
    // }

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
                        <div className='col-6'>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-10'>
                                        {this.props.categoryOrSearch === 'category' ? <KontenUtamaKategori /> : <KontenUtama />}
                                    </div>
                                    <div className='col-2'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect("category, keyWord, categoryOrSearch", actions)(withRouter(MainPage));