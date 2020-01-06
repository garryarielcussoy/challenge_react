import React from 'react'
import '../styles/bootstrap.min.css'
import smsImage from '../img/sms.png'

export class KontenUtama extends React.Component {
    render(){
        return (
            <div className='konten-utama'>
                <img className='content-image' src={smsImage} alt=''/>
                <h3 className='judul-konten-utama'>Nikahi Rakyat Jelata, Putri Ayako dari Jepang Lepaskan Gelar Kerajaan</h3>
                <p className='isi-konten-utama'> Pernikahan Putri Ayako dan Kei Moriya dilangsungkan lewat upacara tradisional Jepang</p>
                <p className='last-update'>Last updated 3 mins ago</p>
            </div>
        )
    }
}