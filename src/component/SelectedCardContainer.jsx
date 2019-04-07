import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { removeCard } from "../actions";
import "../styles/index.css";

class SelectedCardContainer extends React.Component {
  render() {
    if (!this.props.selectedCards.length) {
      return <div className="absence">Выберите супергероя</div>;
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
            />
            <Card image={card.image} />
            <figcaption className="HeroName">
              {card.counter > 1 ? card.counter : ""}
            </figcaption>
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
  { removeCard }
)(SelectedCardContainer);
