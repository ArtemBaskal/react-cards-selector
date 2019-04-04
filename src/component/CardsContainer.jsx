import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import json from "../json/superheroes";

const CardsContainer = ({ universe }) => {
  console.log(universe);
  // if (universe === "DC") {
  //   var _universe = "dc";
  // } else var _universe = "marvel";

  const renderedList = json[universe].map(card => {
    return (
      <div key={card.name}>
        <label>{card.name}</label>
        <img src={card.image} />
      </div>
    );
  });

  return <div>{renderedList}</div>;
};

const mapStateToProps = state => {
  return { universe: state.selectedUniverse };
};

export default connect(mapStateToProps)(CardsContainer);
