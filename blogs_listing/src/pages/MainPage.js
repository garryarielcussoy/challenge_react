import React from 'react'
import '../styles/bootstrap.min.css'
import {Header} from '../components/Header'
import {BeritaTerkini} from '../components/BeritaTerkini'
import {KontenUtama} from '../components/KontenUtama'

export class MainPage extends React.Component {
    // Define state
    state = {
        category: 'Health'
    }
    
    clickTab = async (something) => {
        await this.setState({category: something})
        console.warn('check state value of category', this.state.category)
    }

    render() {
        return (
            <div>
                <Header clickTab={(value) => this.clickTab(value)}/>
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
                                        <KontenUtama clickTab={(value) => this.clickTab(value)} category={this.state.category}/>
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