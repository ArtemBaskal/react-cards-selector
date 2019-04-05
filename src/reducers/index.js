import { combineReducers } from "redux";

const selectedUniverseReducer = (state = "dc", action) => {
  if (action.type === "UNIVERSE_SELECTED") {
    return action.payload;
  }
  return state;
};

const searchedHeroReduced = (state = [], action) => {
  if (action.type === "HERO_SEARCHED") {
    return action.payload;
  }
  return state;
};

export default combineReducers({
  selectedUniverse: selectedUniverseReducer,
  searchedHeroes: searchedHeroReduced
});
