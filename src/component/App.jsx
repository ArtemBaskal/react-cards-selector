import React from "react";
import json from "../json/superheroes";
import CardsContainer from "./CardsContainer";
import SearchBar from "./SearchBar";
import Universe from "./Universe";

class App extends React.Component {
  render() {
    console.log(json);
    return (
      <div>
        <SearchBar />
        <CardsContainer universe={this.props.name}/>
        <Universe name="dc" />
        <Universe name="marvel" />
      </div>
    );
  }
}

export default App;
