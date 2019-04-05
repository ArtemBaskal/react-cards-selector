import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import json from "../json/superheroes";
import "./CardsContainer.css"

const CardsContainer = ({ universe }) => {
  console.log(universe);

  const renderedList = json[universe].map(card => {
    return (
      <div className="CardsContainer" key={card.name}>
        <Card name={card.name} sourse={card.image}/>
      </div>
    );
  });

  return <>{renderedList}</>;
};

const mapStateToProps = state => {
  return { universe: state.selectedUniverse };
};

export default connect(mapStateToProps)(CardsContainer);
