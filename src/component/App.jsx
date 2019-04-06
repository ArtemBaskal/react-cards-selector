import React from "react";
import CardContainer from "./CardContainer";
import SearchBar from "./SearchBar";
import Universe from "./Universe";
import SelectedCardContainer from "./SelectedCardContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <SelectedCardContainer />
        <SearchBar />
        <CardContainer />
        <Universe name="dc" />
        <Universe name="marvel" />
      </div>
    );
  }
}

export default App;
