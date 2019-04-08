import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { removeCard } from "../actions";
import "../styles/index.css";

class SelectedCardContainer extends React.Component {
  render() {
    if (!this.props.selectedCards.length) {
      return (
        <div className="absence SelectedCardsContainer">
          Выберите супергероя
        </div>
      );
    } else {
      const renderedList = this.props.selectedCards.map((card, i) => {
        return (
          <div className="SelectedCardContainer" key={card.name}>
            <i
              onClick={() => {
                console.log(this.props);
                this.props.removeCard(this.props.selectedCards[i].name);
              }}
              className="x icon"
            >
              X
            </i>
            <Card image={card.image} />
            <span className="HeroName">
              {card.counter > 1 ? card.counter : ""}
            </span>
          </div>
        );
      });

      return <div className="SelectedCardsContainer">{renderedList}</div>;
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
  { removeCard }
)(SelectedCardContainer);
