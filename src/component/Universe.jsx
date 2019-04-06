import React from "react";
import { connect } from "react-redux";
import { selectUniverse, searchName } from "../actions";
import dc from "../logos/dc.jpg";
import marvel from "../logos/marvel.jpg";

class Universe extends React.Component {
  render() {
    return (
      <div
        onClick={() => {
          console.log(this.props.name);
          this.props.searchName("");
          this.props.selectUniverse(this.props.name);
        }}
      >
        <img
          src={this.props.name === "dc" ? dc : marvel}
          alt={this.props.name === "dc" ? dc : marvel}
          style={{ height: "100px" }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ё: state.searchedName };
};

export default connect(
  mapStateToProps,
  { selectUniverse, searchName }
)(Universe);
