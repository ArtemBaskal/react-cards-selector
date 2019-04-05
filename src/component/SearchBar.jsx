import React from "react";
import { connect } from "react-redux";
import { searchHeroes } from "../actions";
import json from "../json/superheroes";

class SearchBar extends React.Component {
  onInputChange = event => {

    // if (!this.props.heroes.length || _universe !== this.props.universe) {
    //   alert("univ changed");
    // }
    let filterItems = () =>
      json[this.props.universe].filter(
        hero =>
          hero.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1
      );
    console.log(filterItems());
    this.props.searchHeroes(filterItems());
    // let _universe = this.props.universe;
    // let _heroes = this.props.heroes;
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
              value={this.searchValue}
              placeholder="Имя героя"
              onInput={this.onInputChange}
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
  return { heroes: state.searchedHeroes, universe: state.selectedUniverse };
};

export default connect(
  mapStateToProps,
  { searchHeroes }
)(SearchBar);
