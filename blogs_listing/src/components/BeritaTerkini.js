import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

let judulBeritaTerkini = [
    "Gabung Alpha Tech Academy Sekarang!",
    "Ada Apa Antara Kobar dan Hasan?",
    "Mengenal Arafat Sang Master Python",
    "Belajar React.Js Itu Seru. Kamu Setuju?",
    "Sudahkah Kamu Sehat Mental?",
];

export class BeritaTerkini extends React.Component {
    render(){
        return (
            <div className='berita-terkini'>
                <div className='container-fluid'>
                    <div className='row berita-terkini-first-row'>
                        <div className='col-6 berita-terkini-headline'>
                            <span>BERITA TERKINI</span>
                        </div>
                        <div className='col-6 lihat-semua'>
                            <span>Lihat Semua</span>
                        </div>
                    </div>
                        {judulBeritaTerkini.map((element, i) => 
                            <div className='row list-berita-terkini'>
                                <div className='col-10 elemen-list-berita-terkini'>
                                    <div><span className='tag-number'>#{i+1}</span></div>
                                    <div><span className='judul-berita-terkini'>{element}</span></div>
                                </div>
                                <div className='col-2 elemen-list-berita-terkini-kosong'></div>
                            </div>
                        )}
                </div>
            </div>
        )
    }
}