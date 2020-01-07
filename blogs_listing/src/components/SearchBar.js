import React from 'react'
import '../styles/bootstrap.min.css'
import '../styles/main.css'
import searchLogo from '../img/search.png'

export class SearchBar extends React.Component {
    state = {
        keyWord: ""
    }
    
    // componentDidMount = () => {
    //     const self = this;
    //     axios
    //         .get(urlHeadline)
    //         .then(function(response){
    //             self.setState({judulBeritaTerkini: response.data.articles, isLoading: false})
    //         })
    //         .catch(function(response){
    //             self.setState({isLoading: false})
    //         })
    // }

    // Handle onChange
    handleChange(event) {
        this.setState({keyWord: event.target.value})
    }

    render(){
        return (
            <div className="search-bar">
                <form>
                    <input type="text" placeholder="Search" value={this.state.keyWord} onChange={this.handleChange}></input>
                    <button type="submit"><img src={searchLogo} className="search-logo" /></button>
                </form>
            </div>
        )
    }
}