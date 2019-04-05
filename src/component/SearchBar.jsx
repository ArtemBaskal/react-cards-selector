import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  
  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui fluid category search">
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="ui icon input">
          <input className="prompt" type="text" placeholder="Имя героя" value={this.state.term}
              onChange={this.onInputChange}/>
          <i className="search icon"></i>
        </div>
        <div className="results"></div>
        </form>
      </div>
      
    );
  }
}
export default SearchBar;