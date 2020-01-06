import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'

export class SearchBar extends React.Component {
    render(){
        return (
            <div className="search-bar">
                <form>
                    <input type="text" placeholder="Search"></input>
                    <button type="submit"></button>
                </form>
            </div>
        )
    }
}