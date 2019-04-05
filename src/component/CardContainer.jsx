import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import json from "../json/superheroes";
import "./CardContainer.css";

const Test = ({ heroes, universe }) => {
  console.log(universe);
  console.log(heroes);
  let _heroes,
    _universe = universe;
  if (!heroes.length || _universe !== universe) {
    _heroes = json[universe];
    _universe = universe;
  } else {
    _heroes = heroes;
  }

  const renderedList = _heroes.map(card => {
    return (
      <div className="CardContainer" key={card.name}>
        <Card name={card.name} source={card.image} />
      </div>
    );
  });

  return <>{renderedList}</>;
};

const mapStateToProps = state => {
  return { heroes: state.searchedHeroes, universe: state.selectedUniverse };
};

export default connect(mapStateToProps)(Test);
