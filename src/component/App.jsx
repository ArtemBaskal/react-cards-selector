import React from "react";
import CardContainer from "./CardContainer";
import SearchBar from "./SearchBar";
import Universe from "./Universe";
import SelectedCardContainer from "./SelectedCardContainer";
import "../styles/index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <SelectedCardContainer />
        <div className="mainBody">
          <SearchBar />
          <CardContainer />
          <div className="universesContainer">
            <Universe name="dc" />
            <Universe name="marvel" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
