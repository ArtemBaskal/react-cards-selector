import React from "react";
import { connect } from "react-redux";
import { selectCards, multipleSelectCards } from "../actions";
import _ from "lodash";

class Card extends React.Component {
  render() {
    return (
      <div
        className="Card"
        onClick={() => {
          let arr = _.countBy(this.props.selectedCards, "name");

          console.log(this.props);
          
          if (!arr[this.props.name]) {
            this.props.selectCards(
              Object.assign({}, this.props, {
                counter: 0
              })
            );
          } else {
            this.props.multipleSelectCards(
              Object.assign(
                {},
                this.props,
                _.find(
                  this.props.selectedCards,
                  card => card.name === this.props.name
                ).counter++
              )
            );
          }
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
  { selectCards, multipleSelectCards }
)(Card);
