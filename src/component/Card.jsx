import React from "react";
import { connect } from "react-redux";
import { selectCards } from "../actions";
// import _ from "lodash";

class Card extends React.Component {
  render() {
    // let arr = _.countBy(this.props.selectedCards, "name");
    // console.log(arr);
    // console.log(this.props);
    // console.log(arr[this.props.name]);
    return (
      <div
        className="Card"
        onClick={() => {
          //     console.log(this.props.selectedCards);
          // console.log(Array.from([this.props.image, this.props.name]));
          this.props.selectCards(this.props);
          console.log(this.props);
        }}
      >
        <img src={this.props.image} alt={this.props.name} />
        <figcaption className="HeroName">{this.props.name}</figcaption>
        {/* <figcaption className="HeroName">{arr[this.props.name]}</figcaption> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedCards: state.selectedCards
  };
};

export default connect(
  mapStateToProps,
  { selectCards }
)(Card);
