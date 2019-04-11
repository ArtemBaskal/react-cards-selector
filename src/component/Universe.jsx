import React from "react";
import { connect } from "react-redux";
import { selectUniverse, searchName } from "../actions";
import { NavLink } from "react-router-dom";
import dc from "../logos/dc.svg";
import marvel from "../logos/marvel.svg";
import "../styles/index.css";

class Universe extends React.Component {
  render() {
    return (
      <div
        className={this.props.name}
        onClick={() => {
          this.props.searchName("");
          this.props.selectUniverse(this.props.name);
          this.setState({ opacity: 0.2 });
        }}
      >
        <NavLink to={`/${this.props.name}`}>
          <img
            src={this.props.name === "dc" ? dc : marvel}
            alt={this.props.name === "dc" ? dc : marvel}
          />
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    universe: state.selectedUniverse
  };
};

export default connect(
  mapStateToProps,
  { selectUniverse, searchName }
)(Universe);
