import './Videoitem.css'
import React from 'react';

class SearchBar extends React.Component{
    state={ term: " "}; 
    onInputChange = (e) => {
        this.setState ({ term: e.target.value });
    };
    onFormSubmit = (e) => {
        e.preventDefault();
        //make sure we callback from parent component 
      this.props.onFormSubmit(this.state.term);  
    };
    render(){
        return (
            <div className="search-bar ui segment">
                <form onSubmit= {this.onFormSubmit}className="ui form">
                    <div className="field">
                        <label className="video-search">Video Search</label>
                        <input 
                        onChange ={this.onInputChange}
                        value= {this.state.term} 
                        type="text"/>
                    </div>
                </form>
            </div>
        );
    };
}
export default SearchBar;