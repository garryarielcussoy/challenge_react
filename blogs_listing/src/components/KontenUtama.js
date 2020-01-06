import React from 'react'
import '../styles/bootstrap.min.css'
import putriAyako from '../img/putri_ayako.jpeg'
import heartIcon from '../img/heart_icon.png'
import shareIcon from '../img/share_icon.png'
import dislikeIcon from '../img/dislike_icon.png'

export class KontenUtama extends React.Component {
    render(){
        return (
            <div className='konten-utama'>
                <img className='content-image' src={putriAyako} alt=''/>
                <h3 className='judul-konten-utama'>Nikahi Rakyat Jelata, Putri Ayako dari Jepang Lepaskan Gelar Kerajaan</h3>
                <p className='isi-konten-utama'> Pernikahan Putri Ayako dan Kei Moriya dilangsungkan lewat upacara tradisional Jepang</p>
                <p className='last-update'>Last updated 3 mins ago</p>
                <div className='container-fluid love-share-dislike'>
                    <div className='row'>
                        <div className='col-4 love'><img className='a-pack-of-icons' src={heartIcon}/></div>
                        <div className='col-4 share'><img className='a-pack-of-icons' src={shareIcon}/></div>
                        <div className='col-4 dislike'><img className='a-pack-of-icons' src={dislikeIcon}/></div>
                    </div>
                </div>
            </div>
        )
    }
}