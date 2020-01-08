import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'
import axios from 'axios'
import loadingLogo from '../img/logo.svg'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

// News API
const apiKey = '9975f97755874c9fb9b501d61a9cff2a'
const baseUrl = 'https://newsapi.org/v2/'
const urlHeadline = baseUrl + "top-headlines?country=us&apiKey=" + apiKey

class BeritaTerkini extends React.Component {
    componentDidMount = () => {
        const self = this;
        axios
            .get(urlHeadline)
            .then(async function(response){
                await store.setState({judulBeritaTerkini: response.data.articles, isLoading: false})
            })
            .catch(function(response){
                store.setState({isLoading: false})
            })
    }
    
    render(){
        const judulBeritaTerkini = this.props.judulBeritaTerkini
        const isLoading = this.props.isLoading
        
        // To take the first five top headlines
        const top_five_headlines = judulBeritaTerkini.filter((element, key) => key <= 4);
        
        // Case when isLoading is false
        if (isLoading === false){
            return (
                <div className='berita-terkini'>
                    <div className='container-fluid'>
                        <div className='row berita-terkini-first-row'>
                            <div className='col-6 berita-terkini-headline'>
                                <span>BERITA TERKINI</span>
                            </div>
                            <div className='col-6 lihat-semua'>
                                <span className='lihat-semua-link'>Lihat Semua</span>
                            </div>
                        </div>
                            {top_five_headlines.map((element, i) => 
                                <div className='row list-berita-terkini'>
                                    <div className='col-12 elemen-list-berita-terkini'>
                                        <div><span className='tag-number'>#{i+1}</span></div>
                                        <div><a target='_blank' href={element.url} className='judul-berita-terkini'>{element.title}</a></div>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            )   
        }

        // Case while loading
        else {
            return (
                <div className='while-loading'>
                    Loading...
                    <div>
                        <img className='loading-image' src={loadingLogo} />
                    </div>
                </div>
            )
        }
    }
}

export default connect("category, isLoading, judulBeritaTerkini", actions)(withRouter(BeritaTerkini));