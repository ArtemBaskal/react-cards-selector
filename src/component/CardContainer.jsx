import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import json from "../json/superheroes";
import "../styles/index.css";

const CardContainer = ({ name, heroes, universe }) => {
  let _heroes,
    _universe = universe;
  if (!name.length || _universe !== universe) {
    _heroes = json[universe];
    _universe = universe;
  } else {
    _heroes = heroes;
  }

  if (!_heroes.length) {
    return <div>Ничего не найдено</div>;
  }

  const renderedList = _heroes.map(card => {
    return (
      <div className="CardContainer" key={card.name}>
        <Card name={card.name} image={card.image} />
      </div>
    );
  });

  return <div>{renderedList}</div>;
};

const mapStateToProps = state => {
  return {
    name: state.searchedName,
    heroes: state.foundHeroes,
    universe: state.selectedUniverse
  };
};

export default connect(mapStateToProps)(CardContainer);
