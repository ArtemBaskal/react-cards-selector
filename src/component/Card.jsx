import React from "react";
import { connect } from "react-redux";
import { selectCards, multipleSelectCards } from "../actions";
import _ from "lodash";

class Card extends React.Component {
  onCardClick = () => {
    let arr = _.countBy(this.props.selectedCards, "name");

    if (!arr[this.props.name]) {
      this.props.selectCards(
        Object.assign({}, this.props, {
          counter: 1
        })
      );
    } else {
      this.props.multipleSelectCards(
        Object.assign(
          {},
          this.props,
          this.props.selectedCards.filter(
            card => card.name === this.props.name
          )[0].counter++
        )
      );
    }
  };
  render() {
    return (
      <div className="Card" onClick={this.onCardClick}>
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
