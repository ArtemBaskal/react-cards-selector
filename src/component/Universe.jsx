import React from "react";
import { connect } from "react-redux";
import { selectUniverse } from "../actions";

class Universe extends React.Component {
  render() {
    return (
      <div
        onClick={() => {
          console.log(this.props.name);
          this.props.selectUniverse(this.props.name);
        }}
      >
        <img alt={this.props.name}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { universe: state.selectedUniverse };
};

export default connect(
  mapStateToProps,
  { selectUniverse }
)(Universe);
