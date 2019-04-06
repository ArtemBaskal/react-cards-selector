import { combineReducers } from "redux";

const selectedUniverseReducer = (state = "dc", action) => {
  if (action.type === "UNIVERSE_SELECTED") {
    return action.payload;
  }
  return state;
};

const foundHerosReducer = (state = [], action) => {
  if (action.type === "HEROES_FOUND") {
    return action.payload;
  }
  return state;
};

const searchedNameReducer = (state = "", action) => {
  if (action.type === "NAME_SEARCHED") {
    return action.payload;
  }
  return state;
};

const selectedCardsReducer = (state = [], action) => {
  switch (action.type) {
    case "CARDS_SELECTED":
      return [...state, action.payload];
    case "CARDS_REMOVED": {
      console.log(state);
      return state.filter(el => el.name !== action.payload);
    }
    default:
      return state;
  }
};

export default combineReducers({
  selectedUniverse: selectedUniverseReducer,
  foundHeroes: foundHerosReducer,
  searchedName: searchedNameReducer,
  selectedCards: selectedCardsReducer
});
