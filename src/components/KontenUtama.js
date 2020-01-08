import React from 'react'
import '../styles/bootstrap.min.css'
import heartIcon from '../img/heart_icon.png'
import shareIcon from '../img/share_icon.png'
import dislikeIcon from '../img/dislike_icon.png'
import axios from 'axios'
import loadingLogo from '../img/logo.svg'
import { withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import { actions, store } from "../store";

// News API
const apiKey = '9975f97755874c9fb9b501d61a9cff2a'
const baseUrl = 'https://newsapi.org/v2/'
const urlHeadline = baseUrl + "everything?sources=cnn&apiKey=" + apiKey

class KontenUtama extends React.Component {
    componentDidMount = () => {
        const self = this;
        axios
            .get(urlHeadline)
            .then(function(response){
                store.setState({beritaUtama: response.data.articles, isLoading: false})
            })
            .catch(function(response){
                store.setState({isLoading: false})
            })
    }

    render(){
        const beritaUtama = this.props.beritaUtama
        const isLoading = this.props.isLoading

        // Take news only if the image is not null
        const beritaUtamaDenganImage = beritaUtama.filter(element => element.urlToImage !== null) 

        // To take the first ten news
        const beritaUtamaTeratas = beritaUtamaDenganImage.filter((element, key) => 
        key <= 9);

        // Case while not loading
        if (isLoading === false){
            return (
                <div className='konten-utama'>
                    {beritaUtamaTeratas.map((element, key) =>
                        <div className='each-content'>
                            <img className='content-image' src={element.urlToImage} alt=''/>
                            <h3 className='judul-konten-utama'><a href={element.url} target='_blank'>{element.title}</a></h3>
                            <p className='isi-konten-utama'>{element.description}</p>
                            <p className='last-update'>Published At: {element.publishedAt}</p>
                            <div className='container-fluid love-share-dislike'>
                                <div className='row'>
                                    <div className='col-4 love'><img className='a-pack-of-icons' src={heartIcon}/></div>
                                    <div className='col-4 share'><img className='a-pack-of-icons' src={shareIcon}/></div>
                                    <div className='col-4 dislike'><img className='a-pack-of-icons' src={dislikeIcon}/></div>
                                </div>
                            </div>
                        </div>
                    )}
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

export default connect("isLoading, keyWord, beritaUtama, searchOrCategory", actions)(withRouter(KontenUtama));