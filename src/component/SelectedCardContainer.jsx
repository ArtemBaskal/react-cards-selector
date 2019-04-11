import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { removeCard } from "../actions";
import "../styles/index.css";

class SelectedCardContainer extends React.Component {
  render() {
    if (!this.props.selectedCards.length) {
      return <div className="absence fontStyle">Выберите героя</div>;
    } else {
    }
    const renderedList = this.props.selectedCards.map((card, i) => {
      const counter = () => {
        if (card.counter > 1) {
          return <span className="counter">{card.counter}</span>;
        }
      };
      return (
        <div className="SelectedCardContainer" key={card.name}>
          <span
            onClick={() => {
              this.props.removeCard(this.props.selectedCards[i].name);
            }}
            className="Xicon"
            role="img"
            aria-label={"X"}
          >
            &#10060;
          </span>
          <Card
            name={card.name}
            image={card.image}
            className="selectedCard fontStyle"
          />
          <>{counter()}</>
        </div>
      );
    });

    return <div className="SelectedCardsContainer">{renderedList}</div>;
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
