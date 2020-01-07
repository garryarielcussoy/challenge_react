import React from 'react'
import '../styles/bootstrap.min.css'
import {Header} from '../components/Header'
import {BeritaTerkini} from '../components/BeritaTerkini'
import {KontenUtama} from '../components/KontenUtama'
import {KontenUtamaKategori} from '../components/KontenUtamaKategori'

export class MainPage extends React.Component {
    // Define state
    state = {
        category: '',
        keyWord: 'math',
        categoryOrSearch: 'math'
    }
    
    clickTab = async (something) => {
        await this.setState({category: something, categoryOrSearch: 'category'})
        console.warn('check state value of category', this.state.category)
    }

    searchByWord = async(something) => {
        await this.setState({keyWord: something, categoryOrSearch: 'search'})
        console.warn('check state value of keyword', this.state.keyWord)
    }

    render() {
        return (
            <div>
                <Header clickTab={(value) => this.clickTab(value)} searchByWord={(value) => this.searchByWord(value)}/>
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
                                        {this.state.categoryOrSearch === 'category' ? <KontenUtamaKategori category={this.state.category}/> : <KontenUtama keyWord={this.state.keyWord}/>}
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