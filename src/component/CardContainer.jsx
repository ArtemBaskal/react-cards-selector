import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import json from "../json/superheroes";
import "./CardContainer.css";

const Test = ({ name, heroes, universe }) => {
  // console.log(universe);
  // console.log(heroes);

  let _heroes,
    _universe = universe;
  if (!name.length || _universe !== universe) {
    _heroes = json[universe];
    _universe = universe;
  } else {
    _heroes = heroes;
  }

  // if (name.length >= 0){_heroes = json[universe]}

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
  return {
    name: state.searchedName,
    heroes: state.foundHeroes,
    universe: state.selectedUniverse
  };
};

export default connect(mapStateToProps)(Test);
