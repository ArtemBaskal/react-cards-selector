import React from "react";
import { connect } from "react-redux"
import json from "../json/superheroes";
import CardsContainer from "./CardsContainer";
import SearchBar from "./SearchBar";
import Universe from "./Universe";


class App extends React.Component {

  onTermSubmit = (term) => {console.log(term)}

  render() {
    console.log(json);
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit}/>
        <CardsContainer />
        <Universe name="dc" />
        <Universe name="marvel" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { universe: state.selectedUniverse };
};

export default connect(mapStateToProps)(App);
