import { combineReducers } from "redux";

const selectedUniverseReducer = (state = "dc", action) => {
  if (action.type === "UNIVERSE_SELECTED") {
    return action.payload;
  }
  return state;
};

const foundHerosReduced = (state = [], action) => {
  if (action.type === "HEROES_FOUND") {
    return action.payload;
  }
  return state;
};


const searchedNameReduced = (state = "", action) => {
  if (action.type === "NAME_SEARCHED") {
    return action.payload;
  }
  return state;
};

export default combineReducers({
  selectedUniverse: selectedUniverseReducer,
  foundHeroes: foundHerosReduced,
  searchedName: searchedNameReduced
});
