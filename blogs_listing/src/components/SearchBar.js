import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'
import searchLogo from '../img/search.png'

export class SearchBar extends React.Component {
    
    
    render(){
        return (
            <div className="search-bar">
                <form>
                    <input type="text" placeholder="Search"></input>
                    <button type="submit"><img src={searchLogo} className="search-logo" /></button>
                </form>
            </div>
        )
    }
}