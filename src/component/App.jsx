import React from "react";
import json from "../json/superheroes";
import CardContainer from "./CardContainer";
import SearchBar from "./SearchBar";
import Universe from "./Universe";
import Test from "./test";

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CardContainer />
        <Universe name="dc" />
        <Universe name="marvel" />
      </div>
    );
  }
}

export default App;
