import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'
import searchLogo from '../img/search.png'

export class SearchBar extends React.Component{  
    // Handle Change
    render(){
        return (
            <div className="search-bar">
                <form>
                    <input onChange={(e) => this.props.searchByWord(e.target.value)} type="text" placeholder="Search"></input>
                    <button type="submit"><img src={searchLogo} className="search-logo" /></button>
                </form>
            </div>
        )
    }
}