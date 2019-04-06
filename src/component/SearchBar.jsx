import React from "react";
import { connect } from "react-redux";
import { findHeroes, searchName } from "../actions";
import json from "../json/superheroes";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = event => {
    this.setState({ term: event.target.value });
    console.log(event.target.value);
    console.log(this.state.term);
    console.log(this.props.searchHeroName);

    //TODO: очистка поля ввода при изменении вселенной

    let filterItems = () =>
      json[this.props.universe].filter(
        hero =>
          hero.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
      );
    console.log(filterItems());
    this.props.findHeroes(filterItems());
    this.props.searchName(event.target.value);
    // if (this.props.searchHeroName === "") {
    //   this.setState({ term: "" });
    // }

    console.log(this.props);
  };

  render() {
    return (
      <div className="ui fluid category search">
        <form onSubmit={e => e.preventDefault()}>
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              value={this.state.term}
              placeholder="Имя героя"
              onChange={this.onInputChange}
            />
            <i className="search icon" />
          </div>
          <div className="results" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchHeroName: state.searchedName,
    heroes: state.foundHeroes,
    universe: state.selectedUniverse
  };
};

export default connect(
  mapStateToProps,
  { findHeroes, searchName }
)(SearchBar);
