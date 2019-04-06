import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import "../styles/index.css";

const SelectedCardContainer = ({ selectedCards }) => {
  if (!selectedCards.length) {
    return <div className="absence" />;
  } else {
    const renderedList = selectedCards.map(card => {
      return (
        <div className="SelectedCardContainer" key={card.name}>
          <Card name={card.name} image={card.image} />
        </div>
      );
    });

    return <div>{renderedList}</div>;
  }
};

const mapStateToProps = state => {
  return {
    selectedCards: state.selectedCards
  };
};

export default connect(mapStateToProps)(SelectedCardContainer);
