import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { selectCards, removeCard } from "../actions";
import "../styles/index.css";

class SelectedCardContainer extends React.Component {
  render() {
    console.log(this.props)
    if (!this.props.selectedCards.length) {
      return <div className="absence" />;
    } else {
      const renderedList = this.props.selectedCards.map(card => {
        return (
          <div className="SelectedCardContainer" key={card.name}>
            <i
              onClick={() => {
                console.log(this.props);
                this.props.removeCard(this.props);
              }}
              className="x icon"
            />
            <Card name={card.name} image={card.image} />
          </div>
        );
      });

      return <div>{renderedList}</div>;
    }
  }
}

const mapStateToProps = state => {
  return {
    selectedCards: state.selectedCards
  };
};

export default connect(
  mapStateToProps,
  { selectCards, removeCard }
)(SelectedCardContainer);
