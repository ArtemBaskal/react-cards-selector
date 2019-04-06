import React from "react";
import { connect } from "react-redux";
import { selectCards } from "../actions";
import _ from "lodash";

class Card extends React.Component {
  render() {
    return (
      <div
        className="Card"
        onClick={() => {
          let arr = _.countBy(this.props.selectedCards, "name");
          console.log(arr);
          console.log(arr[this.props.name]);
          // if (arr[this.props.name] > 0) {
          //   console.log("multipleTimesCardSelect")
          //   this.props.multipleTimesCardSelect(arr[this.props.name]);
          // }
          //     console.log(this.props.selectedCards);
          // console.log(Array.from([this.props.image, this.props.name]));
          this.props.selectCards({...this.props, counter: arr[this.props.name]});
          console.log(this.props);
        }}
      >
        <img src={this.props.image} alt={this.props.name} />
        <figcaption className="HeroName">{this.props.name}</figcaption>
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
